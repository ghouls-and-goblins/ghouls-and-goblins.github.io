import { FormattedMessage, injectIntl } from "react-intl";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	getSwapiText = () => <FormattedMessage id="swapi" />;

	render() {
		const { logoLink } = this.props;
		return (
			<header className="ghouls-header-container">
				<div className="ghouls-header">
					<div className="ghouls-content">
						<h1 className="ghouls-title ghouls-accessible-text">
							<FormattedMessage id="appTitle" />
						</h1>
						<Link to={logoLink} className="ghouls-link">
							<img
								src="/assets/img/tombstone.svg"
								className="ghouls-logo"
								alt=""
								aria-hidden="true"
							/>
						</Link>
						<p className="ghouls-description" aria-hidden="true">
							<FormattedMessage id="appHeader" />
						</p>
					</div>
				</div>
			</header>
		);
	}
}

export default injectIntl(Header);
