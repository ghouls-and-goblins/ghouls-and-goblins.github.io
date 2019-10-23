import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvatarSelector extends Component {
    render() {
        const { handleOnClick, monster, selected } = this.props;
        const containerClass = `ghoul-selector ${ selected && 'ghoul-selected' }`;

        return (
            <div className={ containerClass }>
                <div className="ghoul-checkbox" onClick={ handleOnClick }>
                    <img src={ monster.img } alt="" className="ghoul-image" />
                </div>
                <p className="ghoul-name">{ monster.name }</p>
            </div>
        );
    }
}

AvatarSelector.defaultProps = {
    selected: false
};

AvatarSelector.propTypes = {
	handleOnClick: PropTypes.func.isRequired,
    monster: PropTypes.object.isRequired,
    selected: PropTypes.bool
};

export default AvatarSelector;
