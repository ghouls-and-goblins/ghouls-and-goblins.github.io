import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    getEmojiText = () => {
		const { spookyScary } = this.props;
        const spookyContent = <FormattedMessage id="emoji" />;

		return (
			<span role="img" className="ghouls-emoji" onClick={ spookyScary } aria-label={ spookyContent }>
				🧟
			</span>
		);
	};

    getNameText = () => <FormattedMessage id="theLab" />;

    render() {
        const { spookyScary } = this.props;

        return (
			<>
	            <footer className="ghouls-footer">
	                <p><FormattedMessage id="footerDescription" values={{
	                    emoji: this.getEmojiText(),
	                    link: <a href="https://www.ryandudek.com" target="new" className="ghouls-footer-link">{ this.getNameText() }</a>
	                }} /></p>

        			<button type="button" className="ghouls-button ghouls-secret-trigger" onClick={ spookyScary }>
        				<FormattedMessage id="spookySecret" />
        			</button>
	            </footer>
				<div className="ghouls-castle-bg"></div>
			</>
		);
    }
}

Footer.propTypes = {
	spookyScary: PropTypes.func.isRequired
};

export default injectIntl(Footer);
