import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import Modal from './modal';
import PropTypes from 'prop-types';

class SpookyScary extends Component {
    render() {
		const { handleClose, inert } = this.props;

        return (
            <Modal handleClose={ handleClose } inert={ inert } id="ghouls-login-modal">
				<h1 className="ghouls-modal-heading"><FormattedMessage id="spookyScary" /></h1>
				<div style={{ height: '315px' }}>
					<iframe
                        title="Werewolf Bar Mitz Vah music video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/A6V2oCX3Hn4"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen>
					</iframe>
				</div>
			</Modal>
        );
    }
}

SpookyScary.defaultProps = {
	inert: false
};

SpookyScary.propTypes = {
	handleClose: PropTypes.func.isRequired,
	inert: PropTypes.bool
};

export default injectIntl(SpookyScary);
