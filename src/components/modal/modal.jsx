import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
	getCloseText = () => <FormattedMessage id="closeModal" />;

    render() {
		const { children, inert } = this.props;

        return (
			<>
				<div role="button" className="ghouls-modal-bg" aria-hidden="true" aria-label={ this.getCloseText() }></div>
	            <section className="ghouls-modal" inert={ inert }>
					<button class="ghouls-modal-close">{ this.getCloseText() }</button>
					{ children }
	            </section>
			</>
        );
    }
}

Modal.defaultProps = {
	children: null,
	inert: false
};

Modal.propTypes = {
	children: PropTypes.any,
	inert: PropTypes.bool
};

export default injectIntl(Modal);
