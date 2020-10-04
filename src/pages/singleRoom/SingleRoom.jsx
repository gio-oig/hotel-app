import React from 'react';
import { Link } from 'react-router-dom';

import { useRoomsState } from '../../components/roomsContext/RoomsContext';

import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';

import { HeroContainer } from '../../components/hero/Hero.style';

const SingleRoom = ({ match }) => {
	// const [state] = useContext(RoomsContext);
	const state = useRoomsState();
	const room = state.rooms.find((room) => room.slug === match.params.slug);
	const {
		name,
		description,
		capacity,
		size,
		price,
		extras,
		breakfest,
		pets,
		images,
	} = room || {};

	return (
		<>
			{room ? (
				<>
					<HeroContainer img={images}>
						<Banner title={`${name} room`}>
							<Link to="/rooms" className="btn-primary">
								back to rooms
							</Link>
						</Banner>
					</HeroContainer>
					<section className="single-room">
						<div className="single-room-images">
							{images.map((img, i) => (
								<img key={i} src={img} alt={name} />
							))}
						</div>
						<div className="single-room-info">
							<article className="desc">
								<h3>deteils</h3>
								<p>{description}</p>
							</article>
							<article className="info">
								<h3>info</h3>
								<h6>price: {price}</h6>
								<h6>size: {size} SQFT</h6>
								<h6>
									max capaity: {capacity} {capacity > 1 ? 'people' : 'person'}
								</h6>
								<h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
								<h6>{breakfest && 'free breakfest is included'}</h6>
							</article>
						</div>
					</section>
					<section className="room-extras">
						<h6>extras</h6>
						<ul className="extras">
							{extras.map((item, i) => (
								<li key={i}>- {item}</li>
							))}
						</ul>
					</section>
				</>
			) : (
				<div className="error">
					<h3>No such room could found...</h3>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</div>
			)}
		</>
	);
};

export default SingleRoom;
