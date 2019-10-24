import { FormattedMessage, injectIntl } from "react-intl";
import React, { Component } from "react";
import AccessibleSelector from "./../../components/selections/accesibleSelection";
import Selector from "./../../components/selections/selectedNominee";
import AvatarSelector from "./../../components/avatar/avatarSelector";
import Footer from "./../../components/footer/footer";
import Header from "./../../components/header/header";
import { Helmet } from "react-helmet";
import { NOMINEE_DATA } from "../../data/nominees";
import PropTypes from "prop-types";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			isAuthenticated: false,
			selections: [],
			loginModalVisible: false,
			errorModalVisible: false
		};
	}

	selectNominee = (monsterId,e) => {
		let { selections, count } = this.state;

		if (count >= 3) {
			return;
		} else {
			count += 1;
			this.setState({
				selections: [...selections, monsterId]
			});
		}
	};

	renderNominees = () => {
		const { keyboard } = this.props;
		return (
			<ul className="ghouls-nominee-list">
				{NOMINEE_DATA.map((monster, index) => {
					const monsterId = monster.id;

					if (!keyboard) {
						return (
							<AccessibleSelector
								monster={monster}
								key={`monster-${monsterId}`}
								handleOnClick={() =>
									this.selectNominee(monsterId)
								}
							/>
						);
					} else {
						return (
							<Selector
								monster={monster}
								key={`monster-${monsterId}`}
								handleOnClick={() =>
									this.selectNominee(monsterId)
								}
							/>
						);
					}

					return (
						<AvatarSelector
							monster={monster}
							key={`monster-${monsterId}`}
							handleOnClick={() => this.selectNominee(monsterId)}
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

	openLogin = () => {
		// TODO: Create login Modal
		// const { modalVisible } = this.state;
		//
		// this.setState({ loginModalVisible: !loginModalVisible });
		const { isAuthenticated } = this.state;

		this.setState({ isAuthenticated: !isAuthenticated });
	};

	submitData = () => {
		const { selections, errorModalVisible } = this.state;
		console.log(selections, errorModalVisible);

		// if (selections.length) {
		//     return this.props.push('/results');
		// }
		//
		// this.setState({ errorModalVisible: !errorModalVisible });
	};

	renderButton = () => {
		const { isAuthenticated } = this.state;
		const buttonAction = isAuthenticated ? this.submitData : this.openLogin;

		return (
			<div className="ghouls-button-row">
				<button
					type="button"
					className="ghouls-button"
					onClick={buttonAction}
				>
					{this.getButtonText()}
				</button>
			</div>
		);
	};

	render() {
		const { errorModalVisible, loginModalVisible } = this.state;
		const { inert, location, styles } = this.props;
		const motionQuery = location.search && location.search.substr(1, 14);
		const modalVisible = errorModalVisible || loginModalVisible;

		return (
			<>
				<main aria-hidden={inert && modalVisible}>
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

					<Header />

					<section className="ghouls-content">
						<div className="ghouls-selections">
							{/* this.renderSelections() */}
							{this.renderButton()}
						</div>

						<h2 className="ghouls-heading">
							<FormattedMessage id="homeTitle" />
						</h2>
						{this.renderNominees()}
					</section>

					<Footer />
				</main>
				{/* modalVisible && this.renderLoginModal() */}
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
