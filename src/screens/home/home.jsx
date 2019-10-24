import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import AccessibleSelector from "../../components/selections/accesibleSelection";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';
import LoginModal from '../../components/modal/loginModal';
import { NOMINEE_DATA } from '../../data/nominees';
import PropTypes from 'prop-types';
import Selector from "../../components/selections/selectedNominee";
import SpookyScary from '../../components/modal/spookyScary';
import { setRef } from '../../utils/setRef';

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

	selectNominee = (monsterId,e) => {
		const { selections, count } = this.state;

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

		return (
			<ul className="ghouls-nominee-list">
				{ NOMINEE_DATA.map((monster, index) => {
					const monsterId = monster.id;

					if (keyboard) {
						return (
							<AccessibleSelector
								monster={monster}
								key={`monster-${monsterId}`}
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
							handleOnClick={() =>
								this.selectNominee(monsterId)
							}
						/>
					);
				}) }
			</ul>
		);
	};

    getButtonText = () => {
        const { isAuthenticated } = this.state;

        if (isAuthenticated) {
            return <FormattedMessage id="submitVotes" />;
        }

        return <FormattedMessage id="logIn" />;
    }

    toggleLoginModal = () => {
        const { loginModalVisible } = this.state;

        this.setState({ loginModalVisible: !loginModalVisible });
    }

	handleLogin = () => {
        const { isAuthenticated } = this.state;

		this.setState({
			isAuthenticated: !isAuthenticated,
			loginModalVisible: false
		});
	}

    submitData = () => {
        const { selections, errorModalVisible } = this.state;
        console.log(selections, errorModalVisible);

        // if (selections.length) {
        //     return this.props.push('/results');
        // }
        //
        // this.setState({ errorModalVisible: !errorModalVisible });
    }

    renderButton = () => {
        const { isAuthenticated } = this.state;
        const buttonAction = isAuthenticated ? this.submitData : this.toggleLoginModal;

        return (
            <div className="ghouls-button-row">
                <button
                    type="button"
                    className="ghouls-button"
                    onClick={ buttonAction }>
                    { this.getButtonText() }
                </button>
            </div>
        );
    }

	renderModal = () => {
		const { errorModalVisible, werewolfBarMitzVah } = this.state;

		if (errorModalVisible) {
			console.log('there is an error');

			return;
		}

		if (werewolfBarMitzVah) {
			return <SpookyScary handleClose={ this.werewolfBarMitzVah } />;
		}

		return (
			<LoginModal handleClose={ this.toggleLoginModal } handleLogin={ this.handleLogin } />
		);
	}

	werewolfBarMitzVah = () => {
		const { werewolfBarMitzVah } = this.state;

		this.setState({ werewolfBarMitzVah: !werewolfBarMitzVah });
	}

	render() {
		const { errorModalVisible, loginModalVisible, werewolfBarMitzVah } = this.state;
		const { keyboard, inert, location, styles } = this.props;
		const motionQuery = location.search && location.search.substr(1, 14);
		const modalVisible = errorModalVisible || loginModalVisible || werewolfBarMitzVah;
		const inertValue = inert ? modalVisible : false;

		return (
			<>
				<Helmet defer={ false }>
					<link rel="stylesheet" type="text/css" media="all" href={ `/${styles}.css` } />
					{ motionQuery === 'reduced-motion' && <link rel="stylesheet" type="text/css" media="all" href="/ghouls--reduced-motion.css" /> }
					{ inert && <script src="/inert-polyfill.min.js" /> }
				</Helmet>

				<main ref={(node) => setRef(node, inertValue)} className="ghouls-main" id="ghouls-main">
					<Header />

					<section className="ghouls-content ghouls-body-content">
						<div className="ghouls-selections">
							{/* this.renderSelections() */}
							{this.renderButton()}
						</div>

						<h2 className="ghouls-heading">
							<FormattedMessage id="homeTitle" />
						</h2>
						{this.renderNominees()}
					</section>

					<Footer spookyScary={ this.werewolfBarMitzVah }  />
	            </main>
				{ modalVisible && this.renderModal() }
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
