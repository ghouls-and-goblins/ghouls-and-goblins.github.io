import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Result from '../../components/result/result';
import { NOMINEE_DATA } from '../../data/nominees'

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			werewolfBarMitzVah: false
		};
	}

	componentDidMount() {
		let selectors = document.querySelectorAll(".ghoul-animation.is-hidden");

		for (let i = 0; i < selectors.length; i++) {
			setTimeout(function() {
				selectors[i].classList.remove("is-hidden");
				selectors[i].classList.add("is-shown");
			}, 150 * i + 1);
		}
	}

	sortedResults = () => NOMINEE_DATA.sort((NOM1, NOM2) => NOM2.votes - NOM1.votes);

	renderResults = () => {
		const sortedResults = this.sortedResults();
		const totalVotes = sortedResults.reduce((prev, res) => (
			prev + res.votes
		), 0);

		return (
			<ol className="ghouls-results-list">
				{ sortedResults.map((result) => (
					<Result data={ result } totalVotes={ totalVotes } key={ `vote-tally-${result.id}`} />
				)) }
			</ol>
		);
	}

	werewolfBarMitzVah = () => {
		const { werewolfBarMitzVah } = this.state;

		this.setState({ werewolfBarMitzVah: !werewolfBarMitzVah });
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
						<header className="ghouls-section-header">
							<h2 className="ghouls-heading ghouls-section-heading">
								<FormattedMessage id="resultsTitle" />
							</h2>
						</header>

						{ this.renderResults() }
					</section>

					<Footer spookyScary={ this.werewolfBarMitzVah }  />
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
