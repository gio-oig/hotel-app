import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

const NavBar = () => {
	const [navigation, setNavigation] = useState(false);
	const handleClick = () => {
		setNavigation((prevState) => !prevState);
	};
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
					<button className="nav-btn" onClick={handleClick}>
						<FaAlignRight className="nav-icon" />
					</button>
				</div>
				<ul className={navigation ? 'nav-links show-nav' : 'nav-links'}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/rooms">Rooms</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
