import { HashRouter, Route } from "react-router-dom";
import React, { Component } from 'react';
import Home from './screens/home/home';
import Results from './screens/results/results';

class GhoulsApp extends Component {
	render() {
		return (
			<div className="ghouls-app">
				<HashRouter basename='/'>
					<Route exact path="/" component={() =>
						<Home next="/results" styles="users" />
					} />

					<Route path="/home" component={() =>
						<Home next="/contrast" styles="default" />
					} />

					<Route path="/contrast" component={() =>
						<Home next="/keyboard" styles="contrast" />
					} />

					<Route path="/keyboard" component={() =>
						<Home next="/inert" styles="keyboard" keyboard />
					} />

					<Route path="/inert" component={() =>
						<Home next="/dark" styles="keyboard" keyboard inert />
					} />

					<Route path="/dark" component={() =>
						<Home next="/high-contrast" styles="dark" keyboard inert />
					} />

					<Route path="/high-contrast" component={() =>
						<Home next="/high-contrast-light" styles="hc-dark" keyboard inert />
					} />

					<Route exact path="/high-contrast-light" component={() =>
						<Home next="/high-contrast-light?reduced-motion=true" styles="hc-light" keyboard inert />
					} />

					<Route exact path="/high-contrast-light?reduced-motion=true" component={() =>
						<Home next="/high-contrast-light?reduced-motion=true" styles="hc-light" keyboard inert />
					} />

					<Route path="/users" component={() =>
						<Home next="/results" styles="users" keyboard inert />
					} />

					<Route path="/results" component={() =>
						<Results next="/users" styles="users" keyboard inert />
					} />
				</HashRouter>
			</div>
		);
	}
}

export default GhoulsApp;
