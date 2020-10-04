import React, { useContext } from 'react';
// import { RoomsContext } from '../roomsContext/RoomsContext';
import { useRoomsState } from '../roomsContext/RoomsContext';
import Title from '../../title/Title';
import Room from '../room/Room';

const FeaturedRooms = () => {
	// const [state] = useContext(RoomsContext);
	const state = useRoomsState();
	const { loading, featuredRooms } = state;
	return (
		<section className="featured-rooms">
			<Title title="featured rooms" />
			<div className="featured-rooms-center">
				{loading
					? 'false'
					: featuredRooms.map((room) => <Room key={room.id} room={room} />)}
			</div>
		</section>
	);
};

export default FeaturedRooms;
