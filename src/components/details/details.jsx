import { FormattedNumber, FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    checkValue = (value) => {
        if (value === 'unknown' || value === 'n/a') {
            return false;
        }

        return value;
    }

    renderValues = (value, intlId) => {
        const hasValue = this.checkValue(value);

        if (hasValue) {
            return (
                <>
                    <dt className="ghoulscategory">
                        <FormattedMessage id={ intlId } />:
                    </dt>
                    <dd className="ghoulsdetails">
                        { value }
                    </dd>
                </>
            );
        }

        return null;
    }

    renderNumberValues = (value, intlId) => {
        const hasValue = this.checkValue(value);

        if (hasValue) {
            return (
                <>
                    <dt className="ghoulscategory">
                        <FormattedMessage id={ intlId } />:
                    </dt>
                    <dd className="ghoulsdetails">
                        <FormattedNumber value={ value } />
                    </dd>
                </>
            );
        }

        return null;
    }

    render() {
        const { content } = this.props;

        return (
            <article>
                <h2 className="ghoulsheading">{ content.name }</h2>
                <dl>
                    { this.renderValues(content.manufacturer, 'shipManufacturer') }
                    { this.renderValues(content.starship_class, 'shipClass') }
                    { this.renderNumberValues(content.hyperdrive_rating, 'shipHyperdriveRating') }
                    { this.renderNumberValues(content.max_atmosphering_speed, 'shipSpeed') }
                    { this.renderNumberValues(content.MGLT, 'shipMGLT') }
                    { this.renderNumberValues(content.crew, 'shipCrewSize') }
                    { this.renderNumberValues(content.passengers, 'shipPassengers') }
                    { this.renderNumberValues(content.cargo_capacity, 'shipCargo') }
                </dl>
            </article>
        );
    }
}

Details.defaultProps = {
    content: {}
}

Details.propTypes = {
    content: PropTypes.object
};

export default injectIntl(Details);
