import React, { Component } from 'react';
import { Router } from '@reach/router';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './screens/home/home';

class GhoulsApp extends Component {
    render() {
        return (
            <div className="ghouls-app">
                <Header />
                <Router>
                    <Home exact path="/" styles="ghouls--1" />
                    <Home path="/contrast" styles="ghouls--contrast" />
					<Home path="/keyboard" styles="ghouls--keyboard" keyboard />
					<Home path="/dark" styles="ghouls--dark" keyboard />
					<Home path="/high-contrast" styles="ghouls--high-contrast-dark" keyboard />
                    <Home path="/high-contrast-light" styles="ghouls--high-contrast-light" keyboard />
                </Router>
                <Footer />
            </div>
        );
    }
}

export default GhoulsApp;
