import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import Details from './../../components/details/details';
import { Link } from '@reach/router';
import axios from 'axios';

class Starship extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: false,
            starship: {}
        }
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        this.fetchData(`https://swapi.co/api${this.props.location.pathname}/`);
    };

    fetchData = (url) => {
        axios.get(url)
            .then(
                (res) => {
                    this.loadStarship(res.data);
                },
                (err) => {
                    this.setState({
                        errorMessage: true,
                        isLoading: false
                    });
                }
            );
    }

    loadStarship = (data) => {
        this.setState({
            isLoading: false,
            starship: data
        });
    }

    render() {
        const { starship } = this.state;

        return (
            <section className="ghouls-content">
                <nav className="ghouls-breadcrumb">
                    <Link to="/" className="ghouls-link">
                        <FormattedMessage id="goBack" />
                    </Link>
                </nav>

                <Details content={ starship } />
            </section>
        );
    }
}

export default injectIntl(Starship);
