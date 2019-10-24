import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';

class Footer extends Component {
    getEmojiText = () => <FormattedMessage id="emoji" />;

    getNameText = () => <FormattedMessage id="theLab" />;

    render() {
        return (
			<>
	            <footer className="ghouls-footer">
	                <p><FormattedMessage id="footerDescription" values={{
	                    emoji: <span role="img" className="ghouls-emoji" aria-label={this.getEmojiText()}>🧟</span>,
	                    link: <a href="https://www.ryandudek.com" target="new" className="ghouls-footer-link">{ this.getNameText() }</a>
	                }} /></p>
	            </footer>
				<div className="grouls-castle-bg"></div>
			</>
		);
    }
}

export default injectIntl(Footer);
