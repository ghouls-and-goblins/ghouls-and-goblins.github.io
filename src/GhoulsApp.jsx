import React, { Component } from 'react';
import { Router } from '@reach/router';
import Footer from './components/footer/footer';
import Home from './screens/home/home';
import Header from './components/header/header';

class GhoulsApp extends Component {
    render() {
        return (
            <div className="ghouls-app">
                <Header />
                <Router>
                    <Home exact path="/" />
                </Router>
                <Footer />
            </div>
        );
    }
}

export default GhoulsApp;
