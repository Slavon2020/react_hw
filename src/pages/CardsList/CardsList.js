import React, {Fragment} from 'react';
import Card from '../../components/Card/Card';
import './style.scss'
import PropTypes from 'prop-types';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setShowAddToCartModal} from '../../store/modal/actions';
import {useLocation} from 'react-router';
import AddressForm from '../../components/AddressForm/AddressForm';


function CardsList(props) {
	const dispatch = useDispatch();
	const showAddToCartModal = useSelector(state => state.modal.showAddToCartModal);
	const art = useSelector(state => state.modal.openedCardModal)
	const location = useLocation();

	const {items, toggleLocalStorage, show} = props

	let currentItem = null;

	const toggleAddToCartModal = (item) => {
		dispatch(setShowAddToCartModal(!showAddToCartModal))
		currentItem = item;
	}

	let itemsToShow;

	switch (show) {
		case 'all':
			itemsToShow = items
			break
		case 'cart':
			itemsToShow = items.filter(item => item.isAddedToCart)
			break
		case 'favorites':
			itemsToShow = items.filter(item => item.isFavorite)
			break
		default:
			throw new Error('Incorrect type in switch')
	}

	return (
		<Fragment>
			{location.pathname === '/cart' && itemsToShow.length > 0 && <AddressForm/>}
			{itemsToShow && <div className='cards-list'>
				{itemsToShow.map((item) => {
					currentItem = item;
					return <Card
						item={item}
						toggleLocalStorage={toggleLocalStorage}
						toggleAddToCartModal={() => toggleAddToCartModal(currentItem)}
						key={item.art}
					/>
				})}
			</div>}



			{showAddToCartModal &&
			<Modal
				actions={[
					<Button className={'action-btn'}
					        text='Confirm'
					        onClick={() => {
						        toggleLocalStorage('cart', art)
						        toggleAddToCartModal(currentItem)
					        }}

					/>,
					<Button className={'action-btn'}
					        text='Cancel'
					        onClick={() => toggleAddToCartModal(currentItem)}
					/>
				]}
				toggleAddToCartModal={toggleAddToCartModal}
				closeButton
				header='Confirm action'
				text={currentItem.isAddedToCart ?
					`Please confirm removing from cart choosed item!`:
					`Please confirm adding to cart choosed item!`}
			/>
			}
		</Fragment>
	)
}

CardsList.propTypes = {
	items: PropTypes.array,
	show: PropTypes.string.isRequired
}

CardsList.defaultProps = {
	items: null
}

export default CardsList;