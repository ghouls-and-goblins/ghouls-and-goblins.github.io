import React, { Component } from "react";
import PropTypes from "prop-types";

class Selector extends Component {
	render() {
		const { handleOnClick, monster, selected } = this.props;
		const monsterId = `monster-${monster.id}`;
		const containerClass = `ghoul-selector ${selected && "ghoul-selected"}`;

		return (
			<div className={containerClass}>
				<div className="ghoul-checkbox">
					<input
						type="checkbox"
						className='ghoul-checkbox-no-hover'
						name={monsterId}
						id={monsterId}
						onChange={handleOnClick}
					/>
					<img src={monster.image} alt="" className="ghoul-image" />
				</div>
				<label htmlFor={monsterId} className="ghoul-name">
					{monster.name}
				</label>
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
