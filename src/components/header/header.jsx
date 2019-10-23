import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import { Link } from '@reach/router';

class Header extends Component {
    getSwapiText = () => <FormattedMessage id="swapi" />;

    render() {
        return (
            <header className="ghouls-header">
                <div className="ghouls-content">
                    <h1 className="ghouls-title">
                        <Link to="/" className="ghouls-link">
                            <FormattedMessage id="appTitle" />
                        </Link>
                    </h1>
                    <p className="ghouls-description">
                        <FormattedMessage id="appDescription" />
                    </p>
                </div>
            </header>
        );
    }
}

export default injectIntl(Header);
