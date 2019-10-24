import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import Modal from './modal';
import PropTypes from 'prop-types';

class Login extends Component {
    render() {
		const { handleClose, handleLogin, inert } = this.props;

        return (
            <Modal handleClose={ handleClose } inert={ inert } id="ghouls-login-modal">
				<h1 className="ghouls-modal-heading"><FormattedMessage id="loginTitle" /></h1>
				<form>
					<div className="ghouls-input-container">
						<label htmlFor="ghouls-vote-login" className="ghouls-label"><FormattedMessage id="loginInput" /></label>
						<input type="email" id="ghouls-vote-login" name="ghouls-vote-login" className="ghouls-input" />
					</div>
					<div className="ghouls-button-row">
						<button className="ghouls-button" type="button" onClick={ handleLogin }>
							<FormattedMessage id="loginAction" />
						</button>
					</div>
				</form>
			</Modal>
        );
    }
}

Login.defaultProps = {
	inert: false
};

Login.propTypes = {
	handleClose: PropTypes.func.isRequired,
	handleLogin: PropTypes.func.isRequired,
	inert: PropTypes.bool
};

export default injectIntl(Login);
