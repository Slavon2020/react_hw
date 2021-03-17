import React, {Fragment} from 'react';
import Button from '../Button/Button';
import './style.scss'
import propTypes from 'prop-types'


function Modal(props) {
	const {header, text, closeButton, actions, toggleAddToCartModal} = props;
	return (
		<Fragment>
			<div onClick={toggleAddToCartModal} className='overlay'></div>
			<div className='modal'>
				<div className='modal-header'>
					<span className='modal-header-text'>{header}</span>
					{closeButton && <Button className={'close-btn'} onClick={toggleAddToCartModal} text='X'/>}
				</div>
				<div className='modal-body'>
					<p className='modal-text'>{text}</p>
					<div className='modal-buttons'>
						{actions.map((el, index) => {
							return (
								<span key={index}>
									{el}
									</span>
							)
						})}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

Modal.propTypes = {
	header: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
	closeButton: propTypes.bool,
	actions: propTypes.array.isRequired,
	toggleAddToCartModal: propTypes.func.isRequired
}

Modal.defaultProps = {
	closeButton: false
}

export default Modal;