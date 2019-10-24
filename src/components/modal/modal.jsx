import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setRef } from '../../utils/setRef';

class Modal extends Component {
	constructor(props){
		super(props);
		this.handleEscape = this.handleEscape.bind(this);
	}

	handleEscape(event){
		if (event.keyCode === 27) {
			this.props.handleClose();
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleEscape, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.handleEscape, false);
	}

	render() {
		const { children, handleClose, id, inert } = this.props;

        return (
			<>
				<div role="button"
					className="ghouls-modal-bg"
					aria-hidden="true"
					aria-label={ <FormattedMessage id="closeModal" /> }
					onClick={ handleClose }></div>
	            <aside className="ghouls-modal" ref={ (node) => setRef(node, inert) } id={ id }>
					<button className="ghouls-modal-close" onClick={ handleClose }>
						<span className="ghouls-accessible-text">
							<FormattedMessage id="closeModal" />
						</span>
					</button>

					{ children }
	            </aside>
			</>
        );
    }
}

Modal.defaultProps = {
	children: null,
	id: '',
	inert: false
};

Modal.propTypes = {
	children: PropTypes.any,
	handleClose: PropTypes.func.isRequired,
	id: PropTypes.string,
	inert: PropTypes.bool
};

export default injectIntl(Modal);
