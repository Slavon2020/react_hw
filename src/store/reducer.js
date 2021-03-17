import {SET_SHOW_ADD_TO_CART_MODAL, SET_ITEMS, SET_LOADING, SET_OPENED_CARD_MODAL} from './types'

const initialStore = {
	showAddToCartModal: false,
	openedCardModal: null,
	items: [],
	isLoading: true
}

export const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case SET_SHOW_ADD_TO_CART_MODAL:
			return {...state, showAddToCartModal: action.payload}
		case SET_ITEMS:
			return {...state, items: action.payload}
		case SET_LOADING:
			return {...state, isLoading: action.payload}
		case SET_OPENED_CARD_MODAL:
			return {...state, openedCardModal: action.payload}
		default:
			return state
	}
}