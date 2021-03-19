import {SET_OPENED_CARD_MODAL, SET_SHOW_ADD_TO_CART_MODAL} from './types';

const initialStore = {
	showAddToCartModal: false,
	openedCardModal: null,
}

const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case SET_SHOW_ADD_TO_CART_MODAL:
			return {...state, showAddToCartModal: action.payload}
		case SET_OPENED_CARD_MODAL:
			return {...state, openedCardModal: action.payload}
		default:
			return state
	}
}

export default reducer;