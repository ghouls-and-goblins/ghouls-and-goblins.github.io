import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    getEmojiText = () => {
		const { spookyScary } = this.props;

		return (
			<button type="button" className="ghouls-emoji" onClick={ spookyScary }>
				🧟
				<span className="ghouls-accessible-text"><FormattedMessage id="emoji" /></span>
			</button>
		);
	};

    getNameText = () => <FormattedMessage id="theLab" />;

    render() {
        return (
			<>
	            <footer className="ghouls-footer">
	                <p><FormattedMessage id="footerDescription" values={{
	                    emoji: this.getEmojiText(),
	                    link: <a href="https://www.ryandudek.com" target="new" className="ghouls-footer-link">{ this.getNameText() }</a>
	                }} /></p>
	            </footer>
				<div className="grouls-castle-bg"></div>
			</>
		);
    }
}

Footer.propTypes = {
	spookyScary: PropTypes.func.isRequired
};

export default injectIntl(Footer);
