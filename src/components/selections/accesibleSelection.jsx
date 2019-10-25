import React, { Component } from "react";
import PropTypes from "prop-types";

class AccessibleSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: false
		};
	}

	render() {
		const { handleOnClick, monster, selected } = this.props;
		const { focused } = this.state;
		const monsterId = `monster-${monster.id}`;
		const containerClass = `ghoul-selector ghoul-animation ${
			selected ? 'ghoul-selected' : ''
		} ${focused ? 'ghoul-focused' : '' }`;

		const handleFocus = () => {
			this.setState({
				focused: true
			});
		};

		const handleBlur = () => {
			this.setState({
				focused: false
			});
		};

		return (
			<div className={ containerClass } onClick={handleOnClick}>
				<div className="ghoul-checkbox">
					<input
						onFocus={handleFocus}
						onBlur={handleBlur}
						type="checkbox"
						className="ghoul-checkbox-input"
						name={monsterId}
						id={monsterId}
						onChange={handleOnClick}
					/>
					<div className='ghoul-image' style={{ backgroundImage: `url(${monster.image})` }}></div>
				</div>
				<label htmlFor={monsterId} className="ghoul-name">
					{monster.name}
				</label>
			</div>
		);
	}
}

AccessibleSelector.defaultProps = {
	selected: false
};

AccessibleSelector.propTypes = {
	handleOnClick: PropTypes.func.isRequired,
	monster: PropTypes.object.isRequired,
	selected: PropTypes.bool
};

export default AccessibleSelector;
