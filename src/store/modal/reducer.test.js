import reducer from './reducer';
import {SET_OPENED_CARD_MODAL, SET_SHOW_ADD_TO_CART_MODAL} from './types';

describe('Testing modal reducer', () => {
	test('show/hide add to cart modal', () => {
		const initialStore = {
			showAddToCartModal: false,
			openedCardModal: null,
		};
		const action = {type: SET_SHOW_ADD_TO_CART_MODAL, payload: true};
		const newState = reducer(initialStore, action)
		expect(newState.showAddToCartModal).toBe(action.payload);
		expect(initialStore.openedCardModal).toBe(newState.openedCardModal);
	})
	test('change opened card', () => {
		const initialStore = {
			showAddToCartModal: false,
			openedCardModal: null,
		};
		const action = {type: SET_OPENED_CARD_MODAL, payload: 1};
		const newState = reducer(initialStore, action)
		expect(newState.openedCardModal).toBe(action.payload);
		expect(initialStore.showAddToCartModal).toBe(newState.showAddToCartModal);
		expect(newState).toEqual({...initialStore, openedCardModal: action.payload});
	})
})