import React, { Component } from "react";
import PropTypes from "prop-types";

class Selector extends Component {
	render() {
		const { handleOnClick, monster, selected } = this.props;
		handleOnClick();
		const monsterId = `monster-${monster.id}`;
		const containerClass = `ghoul-selector ${selected && "ghoul-selected"}`;

		return (
			<div className={containerClass}>
				<div
					className="ghoul-checkbox"
					style={{ backgroundImage: `url(${monster.image})` }}
				>
					<input
						type="checkbox"
						className="ghoul-checkbox-input"
						name={monsterId}
						id={monsterId}
						onChange={handleOnClick}
					/>
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
