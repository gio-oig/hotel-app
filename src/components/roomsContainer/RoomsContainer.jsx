import React from 'react';

import RoomsFilter from '../roomsFilter/RoomsFilter';
import RoomsList from '../roomsList/RoomsList';

const RoomsContainer = () => {
	return (
		<div>
			<RoomsFilter />
			<RoomsList />
		</div>
	);
};

export default RoomsContainer;
