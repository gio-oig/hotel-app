import React, { useEffect } from 'react';
import Title from '../../title/Title';
import { useRoomsState, useRoomsSetState } from '../roomsContext/RoomsContext';

const RoomsFilter = () => {
	const state = useRoomsState();
	const setState = useRoomsSetState();
	const { rooms, capacity, type } = state;
	console.log(state);

	const getUnique = (items, value) => {
		return [...new Set(items.map((item) => item[value]))];
	};

	const handleChange = (e) => {
		const target = e.target;
		const value = e.type === 'checkbox' ? target.checked : target.value;
		// get input names
		const name = target.name;
		let tempRooms = rooms;

		if (name === 'type' && value !== 'all') {
			tempRooms = rooms.filter((room) => room.type === value);
		}
		if (name === 'capacity' && value !== 1) {
			const IntValue = parseInt(value);
			tempRooms = tempRooms.filter((room) => room.capacity === IntValue);
		}
		setState((prevState) => {
			return { ...prevState, sortedRooms: tempRooms, [name]: value };
		});
	};

	// Create unique types for filter
	let types = getUnique(rooms, 'type');
	types = ['all', ...types];
	let guests = getUnique(rooms, 'capacity');
	return (
		<div>
			{rooms ? (
				<section className="filter-container">
					<Title title="search rooms" />
					<form className="filter-form">
						<div className="form-group">
							<label htmlFor="type">room type</label>
							<select
								name="type"
								id="type"
								value={type}
								className="form-control"
								onChange={handleChange}
							>
								{types.map((type, i) => (
									<option key={i} value={type}>
										{type}
									</option>
								))}
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="capacity">Guests</label>
							<select
								name="capacity"
								id="capacity"
								value={capacity}
								className="form-control"
								onChange={handleChange}
							>
								{guests.map((guest, i) => (
									<option key={i} value={guest}>
										{guest}
									</option>
								))}
							</select>
						</div>
					</form>
				</section>
			) : (
				''
			)}
		</div>
	);
};

export default RoomsFilter;
