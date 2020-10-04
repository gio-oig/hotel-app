import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from '../../title/Title';

const Services = () => {
	const [services, setServices] = useState([
		{
			icon: <FaCocktail />,
			title: 'free cocktails',
			info:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, totam!',
		},
		{
			icon: <FaHiking />,
			title: 'endless hiking',
			info:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, totam!',
		},
		{
			icon: <FaShuttleVan />,
			title: 'free shuttle',
			info:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, totam!',
		},
		{
			icon: <FaBeer />,
			title: 'strongest bear',
			info:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, totam!',
		},
	]);
	return (
		<section className="services">
			<Title title="services" />
			<div className="services-center">
				{services.map((service, index) => (
					<article key={index} className="service">
						<span>{service.icon}</span>
						<h6>{service.title}</h6>
						<p>{service.info}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Services;
