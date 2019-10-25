import React, { Component } from "react";
import PropTypes from "prop-types";

class Selector extends Component {
	render() {
		const { handleOnClick, monster, selected } = this.props;
		const monsterId = `monster-${monster.id}`;
		const containerClass = `ghoul-selector is-hidden ${selected ? ("ghoul-selected"): ("")}`;

		return (
			<div className={containerClass} onClick={handleOnClick}>
				<div className="ghoul-checkbox">
					<div className='ghoul-checkbox-input ghoul-checkbox-no-hover' id={monsterId} onChange={handleOnClick}></div>
					<div className='ghoul-image' style={{ backgroundImage: `url(${monster.image})` }}></div>
				</div>
				<p className="ghoul-name">{monster.name}</p>
			</div>
		);
	}
}

Selector.defaultProps = {
	selected: false
};

Selector.propTypes = {
	handleOnClick: PropTypes.func.isRequired,
	monster: PropTypes.object.isRequired,
	selected: PropTypes.bool
};

export default Selector;
