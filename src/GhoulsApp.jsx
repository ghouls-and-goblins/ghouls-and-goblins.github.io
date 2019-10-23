import React, { Component } from 'react';
import { Router } from '@reach/router';
import AccessibleHome from './screens/home/accessibleHome';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Helmet } from 'react-helmet';
import Home from './screens/home/home';

class GhoulsApp extends Component {
    render() {
        return (
            <div className="ghouls-app">
                <Header />
                <Router>
                    <Home exact path="/">
                        <Helmet defer={ false }>
                            <link rel="stylesheet" type="text/css" media="all" href="/ghouls--1.css" />
                        </Helmet>
                    </Home>
                    <Home path="/contrast">
                        <Helmet defer={ false }>
                            <link rel="stylesheet" type="text/css" media="all" href="/ghouls--contrast.css" />
                        </Helmet>
                    </Home>
                    <AccessibleHome path="/keyboard">
                        <Helmet defer={ false }>
                            <link rel="stylesheet" type="text/css" media="all" href="/ghouls--contrast.css" />
                        </Helmet>
                    </AccessibleHome>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default GhoulsApp;
