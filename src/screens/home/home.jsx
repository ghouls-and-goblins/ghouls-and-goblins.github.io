import { FormattedMessage, injectIntl } from "react-intl";
import React, { Component } from "react";
import AccessibleSelector from "../../components/selections/accesibleSelection";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router';
import LoginModal from '../../components/modal/loginModal';
import { NOMINEE_DATA } from '../../data/nominees';
import PropTypes from 'prop-types';
import Selector from "../../components/selections/selectedNominee";
import SpookyScary from "../../components/modal/spookyScary";
import { setRef } from "../../utils/setRef";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			isAuthenticated: false,
			selections: [],
			loginModalVisible: false,
			errorModalVisible: false,
			werewolfBarMitzVah: false
		};
	}

	componentDidMount() {
		let selectors = document.querySelectorAll(".ghoul-selector.is-hidden");
		for (let i = 0; i < selectors.length; i++) {
			setTimeout(function() {
				selectors[i].classList.remove("is-hidden");
				selectors[i].classList.add("is-shown");
			}, 150 * i + 1);
		}
	}

	selectNominee = monsterId => {
		const { selections, count } = this.state;

		if (selections.indexOf(monsterId) >= 0) {
			this.setState({
				count: count - 1,
				selections: selections.filter((prevSelection) => prevSelection !== monsterId)
			});

			return;
		}

		if (count >= 3) {
			return;
		}

		this.setState({
			count: count + 1,
			selections: [...selections, monsterId]
		});
	};

	renderNominees = () => {
		const { keyboard } = this.props;
		const { selections } = this.state;

		return (
			<ul className="ghouls-nominee-list">
				{NOMINEE_DATA.map((monster, index) => {
					const monsterId = monster.id;

					if (keyboard) {
						return (
							<AccessibleSelector
								monster={monster}
								key={`monster-${monsterId}`}
								selected={selections.indexOf(monsterId) >= 0}
								handleOnClick={() =>
									this.selectNominee(monsterId)
								}
							/>
						);
					}

					return (
						<Selector
							monster={monster}
							key={`monster-${monsterId}`}
							selected={selections.indexOf(monsterId) >= 0}
							handleOnClick={() =>
								this.selectNominee(monsterId)
							}
						/>
					);
				})}
			</ul>
		);
	};

	getButtonText = () => {
		const { isAuthenticated } = this.state;

		if (isAuthenticated) {
			return <FormattedMessage id="submitVotes" />;
		}

		return <FormattedMessage id="logIn" />;
	};

	toggleLoginModal = () => {
		const { loginModalVisible } = this.state;

		this.setState({ loginModalVisible: !loginModalVisible });
	};

	handleLogin = () => {
		const { isAuthenticated } = this.state;

		this.setState({
			isAuthenticated: !isAuthenticated,
			loginModalVisible: false
		});
	};

	renderButton = () => {
		const { isAuthenticated } = this.state;

		if (isAuthenticated) {
            return (
				<Link
	                className="ghouls-button"
	                to="/results">
	                { this.getButtonText() }
	            </Link>
			);
		}

        return (
            <button
                type="button"
                className="ghouls-button"
                onClick={ this.toggleLoginModal }>
                { this.getButtonText() }
            </button>
        );
    }

	renderModal = () => {
		const { errorModalVisible, werewolfBarMitzVah } = this.state;

		if (errorModalVisible) {
			console.log("there is an error");

			return;
		}

		if (werewolfBarMitzVah) {
			return <SpookyScary handleClose={this.werewolfBarMitzVah} />;
		}

		return (
			<LoginModal
				handleClose={this.toggleLoginModal}
				handleLogin={this.handleLogin}
			/>
		);
	};

	werewolfBarMitzVah = () => {
		const { werewolfBarMitzVah } = this.state;

		this.setState({ werewolfBarMitzVah: !werewolfBarMitzVah });
	};

	render() {
		const {
			errorModalVisible,
			loginModalVisible,
			werewolfBarMitzVah
		} = this.state;
		const { keyboard, inert, location, styles, next } = this.props;
		const motionQuery = location.search && location.search.substr(1, 14);
		const modalVisible =
			errorModalVisible || loginModalVisible || werewolfBarMitzVah;
		const inertValue = inert ? modalVisible : false;

		return (
			<>
				<Helmet defer={false}>
					<link
						rel="stylesheet"
						type="text/css"
						media="all"
						href={`/${styles}.css`}
					/>
					{motionQuery === "reduced-motion" && (
						<link
							rel="stylesheet"
							type="text/css"
							media="all"
							href="/ghouls--reduced-motion.css"
						/>
					)}
					{inert && <script src="/inert-polyfill.min.js" />}
				</Helmet>

				<main
					ref={node => setRef(node, inertValue)}
					className="ghouls-main"
					id="ghouls-main"
				>
					<Header logoLink={next} />

					<section className="ghouls-content ghouls-body-content">
						<header className="ghouls-section-header">
							<h2 className="ghouls-heading ghouls-section-heading">
								<FormattedMessage id="homeTitle" />
							</h2>
							{this.renderButton()}
						</header>

						<div className="ghouls-section-header">
							<p className="ghouls-section-description">
								<FormattedMessage
									id="homeDescription"
									values={{
										nominees: (
											<strong>
												<FormattedMessage id="homeDescriptionNomineed" />
											</strong>
										)
									}}
								/>
							</p>
						</div>

						<div className="ghouls-section-header ghouls-selections">
							{/* this.renderSelections() */}
						</div>

						<h3 className="ghouls-heading ghouls-accessible-text">
							<FormattedMessage id="homeNominees" />
						</h3>

						{this.renderNominees()}

						{keyboard && (
							<div className="ghouls-button-row">
								{this.renderButton()}
							</div>
						)}
					</section>

					<Footer spookyScary={this.werewolfBarMitzVah} />
				</main>
				{modalVisible && this.renderModal()}
			</>
		);
	}
}

Home.defaultProps = {
	inert: false,
	keyboard: false
};

Home.propTypes = {
	inert: PropTypes.bool,
	keyboard: PropTypes.bool,
	location: PropTypes.object.isRequired,
	styles: PropTypes.string.isRequired
};

export default injectIntl(Home);
