import { FormattedNumber, FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
    render() {
        const { data, totalVotes } = this.props;

        return (
            <li className="ghouls-results-item">
				<div className="ghouls-results-img-container">
                	<img src={ data.image } className="ghouls-result-img" alt="" />
				</div>
				<p className="ghouls-result-name">
					{ data.name }
					<span className="ghouls-result-votes">
						<FormattedMessage id="voteCount" values={{
							count: <FormattedNumber value={ data.votes } />,
							total: <FormattedNumber value={ totalVotes } />
						}} />
					</span>
				</p>
            </li>
		);
    }
}

Result.propTypes = {
	data: PropTypes.shape({}).isRequired,
	totalVotes: PropTypes.number.isRequired
};

export default injectIntl(Result);
