import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';
import RoomsContainer from '../../components/roomsContainer/RoomsContainer';

const Rooms = () => {
	return (
		<div>
			<Hero hero="roomsHero">
				<Banner title="our rooms">
					<Link to="/" className="btn-primary">
						return home
					</Link>
				</Banner>
			</Hero>
			<RoomsContainer />
		</div>
	);
};

export default Rooms;
