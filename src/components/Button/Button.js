import React from 'react';
import '../../reset.scss';
import './style.scss';
import PropTypes from 'prop-types';


function Button(props) {
	const {backgroundColor, text, onClick, className, disabled} = props;

	return (
		<button id='test-btn' disabled={disabled} className={className} style={{backgroundColor}} onClick={onClick}>{text}</button>
	);
}
Button.propTypes = {
	backgroundColor: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool
}

Button.defaulProps = {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	className: 'btn',
	onClick: null,
	disabled: false
}

export default Button;

