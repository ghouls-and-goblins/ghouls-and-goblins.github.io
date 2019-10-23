import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvatarSelector extends Component {
    render() {
        const { monster, selected } = this.props;
        const monsterId = `monster-${monster.id}`;
        const containerClass = `ghoul-selector ${ selected && 'ghoul-selected' }`;

        return (
            <div className={ containerClass }>
                <div className="ghoul-checkbox">
                    <input type="checkbox" name={ monsterId } id={ monsterId } />
                    <img src={ monster.img } alt="" className="ghoul-image" />
                </div>
                <label htmlFor={ monsterId } className="ghoul-name">{ monster.name }</label>
            </div>
        );
    }
}

AvatarSelector.defaultProps = {
    selected: false
};

AvatarSelector.propTypes = {
    monster: PropTypes.object.isRequired,
    selected: PropTypes.bool
};

export default AvatarSelector;
