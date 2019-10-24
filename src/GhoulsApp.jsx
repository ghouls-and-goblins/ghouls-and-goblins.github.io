import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./screens/home/home";
import Results from "./screens/results/results";

class GhoulsApp extends Component {
	render() {
		return (
			<div className="ghouls-app">
				<Router>
					<Home exact path="/" next="/contrast" styles="ghouls--1" />
					<Home path="/home" next="/contrast" styles="ghouls--1" />
					<Home
						path="/contrast"
						next="/keyboard"
						styles="ghouls--contrast"
					/>
					<Home
						path="/keyboard"
						next="/inert"
						styles="ghouls--keyboard"
						keyboard
					/>
					<Home
						path="/inert"
						next="/dark"
						styles="ghouls--keyboard"
						keyboard
						inert
					/>
					<Home
						path="/dark"
						next="/high-contrast"
						styles="ghouls--dark"
						keyboard
						inert
					/>
					<Home
						path="/high-contrast"
						next="/high-contrast-light"
						styles="ghouls--high-contrast-dark"
						keyboard
						inert
					/>
					<Home
						path="/high-contrast-light"
						next="/results"
						styles="ghouls--high-contrast-light"
						keyboard
						inert
					/>
					<Results
						path="/results"
						next="/results-dark"
						styles="ghouls--keyboard"
						keyboard
						inert
					/>
					<Results
						path="/results-dark"
						next="/results-high-contrast"
						styles="ghouls--dark"
						keyboard
						inert
					/>
					<Results
						path="/results-high-contrast"
						next="/results-high-contrast-light"
						styles="ghouls--high-contrast-dark"
						keyboard
						inert
					/>
					<Results
						path="/results-high-contrast-light"
						next="/home"
						styles="ghouls--high-contrast-light"
						keyboard
						inert
					/>
				</Router>
			</div>
		);
	}
}

export default GhoulsApp;
