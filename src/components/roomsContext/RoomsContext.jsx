import React, { useState, useEffect, createContext, useContext } from 'react';
import items from '../../data';

const RoomsStateContext = createContext();
const RoomsSetStateContext = createContext();

const RoomsProvider = ({ children }) => {
	const [state, setState] = useState({
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
	});

	useEffect(() => {
		const rooms = formatData(items);
		const featuredRooms = rooms.filter((room) => room.featured === true);

		setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false,
			type: 'all',
			capacity: 1,
			price: 0,
			minPrice: 0,
			maxPrice: 0,
			minSize: 0,
			maxSize: 0,
			breakfast: false,
			pets: false,
		});
	}, []);

	const formatData = (items) => {
		let tempItems = items.map((item) => {
			const id = item.sys.id;
			const images = item.fields.images.map((image) => image.fields.file.url);
			const rooms = { ...item.fields, images, id };
			return rooms;
		});
		return tempItems;
	};

	return (
		<RoomsStateContext.Provider value={state}>
			<RoomsSetStateContext.Provider value={setState}>
				{children}
			</RoomsSetStateContext.Provider>
		</RoomsStateContext.Provider>
	);
};

function useRoomsState() {
	const context = useContext(RoomsStateContext);
	if (context === undefined) {
		throw new Error('useRoomsState must be used within a RoomsProvider');
	}
	return context;
}

function useRoomsSetState() {
	const context = useContext(RoomsSetStateContext);
	if (context === undefined) {
		throw new Error('useRoomsSetState must be used within a RoomsProvider');
	}
	return context;
}

export { RoomsProvider, useRoomsState, useRoomsSetState };
