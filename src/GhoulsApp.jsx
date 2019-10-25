import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './screens/home/home';
import Results from './screens/results/results';

class GhoulsApp extends Component {
	render() {
		return (
			<div className="ghouls-app">
				<Router>
					<Home exact path="/" next="/home" styles="default" />

					<Home path="/home" next="/contrast" styles="default" />

					<Home
						path="/contrast"
						next="/keyboard"
						styles="contrast"
					/>

					<Home
						path="/keyboard"
						next="/inert"
						styles="keyboard"
						keyboard
					/>

					<Home
						path="/inert"
						next="/dark"
						styles="keyboard"
						keyboard
						inert
					/>

					<Home
						path="/dark"
						next="/high-contrast"
						styles="dark"
						keyboard
						inert
					/>

					<Home
						path="/high-contrast"
						next="/high-contrast-light"
						styles="hc-dark"
						keyboard
						inert
					/>

					<Home
						path="/high-contrast-light"
						next="/users"
						styles="hc-light"
						keyboard
						inert
					/>

					<Home
						path="/users"
						next="/results"
						styles="users"
						keyboard
						inert
					/>

					<Results
						path="/results"
						next="/results-dark"
						styles="users"
						keyboard
						inert
					/>
				</Router>
			</div>
		);
	}
}

export default GhoulsApp;
