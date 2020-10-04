import React from 'react';

import { useRoomsState } from '../roomsContext/RoomsContext';

import Room from '../room/Room';

const RoomsList = () => {
	const state = useRoomsState();
	// console.log(state);
	const { sortedRooms } = state;
	return (
		<>
			<section className="roomslist">
				<div className="roomslist-center">
					{sortedRooms.length ? (
						sortedRooms.map((room) => <Room key={room.id} room={room} />)
					) : (
						<h1>no rows</h1>
					)}
				</div>
			</section>
		</>
	);
};

export default RoomsList;
