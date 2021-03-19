import React, {Fragment} from 'react';
import Button from '../Button/Button';
import '../../reset.scss';
import './style.scss';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router';
import {useDispatch} from 'react-redux';
import {setOpenedCardModal} from '../../store/modal/actions';



function Card(props) {

	const dispatch = useDispatch();

	const {toggleLocalStorage, toggleAddToCartModal, item} = props

	const {name, price, art, url, color, isFavorite, isAddedToCart} = props.item;

	const location = useLocation();

	return (
		<Fragment>
			<div className='card'>
				<div className='card__top'>
					<p className='card-art'>art: {art}</p>
					<Icon art={art}
					      localStorageKey='favorites'
					      toggleLocalStorage={toggleLocalStorage}
					      isFavorite={isFavorite}
					      className='star-icon'
					      color='#ffc107'
					/>
					{location.pathname === '/cart' &&
					<Button className='remove-btn'
					        text='X'
					        onClick={() => {
						        dispatch(setOpenedCardModal(art))
						        toggleAddToCartModal(item)
					        }}
					/>}
				</div>

				<div className='card__img-wrap'>
					<img src={url} className='card__img' alt='sneakers'/>
				</div>
				<div className='card__info'>
					<p className='card__title'>name: {name}</p>
					<p className='card__color'>color: {color}</p>
					<p className='card__price'>price: {price}$</p>
				</div>
				<div className='card__bottom'>
					{isAddedToCart ?
						<Button backgroundColor='green' text='In cart' disabled onClick={toggleAddToCartModal} className='card__buy-btn'/> :
						<Button backgroundColor='orange' text='Add to cart' onClick={() => {
							dispatch(setOpenedCardModal(art))
							toggleAddToCartModal(item)
						}} className='card__buy-btn'/>
					}
				</div>
			</div>
		</Fragment>
	);
}

Card.propTypes = {
	item: PropTypes.exact({
		name: PropTypes.string,
		price: PropTypes.number,
		art: PropTypes.number,
		url: PropTypes.string,
		color: PropTypes.string,
		isFavorite: PropTypes.bool,
		isAddedToCart: PropTypes.bool
	}).isRequired,
	toggleLocalStorage: PropTypes.func.isRequired,
}

export default Card;

