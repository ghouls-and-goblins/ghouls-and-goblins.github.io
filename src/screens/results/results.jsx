import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { NOMINEE_DATA } from '../../data/nominees'

class Results extends Component {
	renderResults = () => {
		console.log(NOMINEE_DATA);
	}

    render() {
		const { location, styles, next } = this.props;
		const motionQuery = (location.search && location.search.substr(1, 14));

        return (
			<>
				<main>
					<Helmet defer={ false }>
						<link rel="stylesheet" type="text/css" media="all" href={ `/${styles}.css` } />
						{ motionQuery === 'reduced-motion' && <link rel="stylesheet" type="text/css" media="all" href="/ghouls--reduced-motion.css" /> }
					</Helmet>

					<Header logoLink={next} />

					<section className="ghouls-content">
						<h2 className="ghouls-heading"><FormattedMessage id="resultsTitle" /></h2>
						{ this.renderResults() }
					</section>

					<Footer />
	            </main>
			</>
        );
    }
}

Results.propTypes = {
	location: PropTypes.object.isRequired,
	styles: PropTypes.string.isRequired
};

export default injectIntl(Results);
