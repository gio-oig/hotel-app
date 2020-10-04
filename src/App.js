import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Rooms from './pages/rooms/Rooms';
import SingleRoom from './pages/singleRoom/SingleRoom';
import Error from './pages/error/Error';

import './App.css';

import { RoomsProvider } from './components/roomsContext/RoomsContext';

function App() {
	return (
		<RoomsProvider>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/rooms" component={Rooms} />
					<Route exact path="/rooms/:slug" component={SingleRoom} />
					<Route component={Error} />
				</Switch>
			</div>
		</RoomsProvider>
	);
}

export default App;
