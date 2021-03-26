import {CLEAR_CART, UPDATE_USER_ADDRESS} from './types';

const initialStore = {
	userAddress: null
}

const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case UPDATE_USER_ADDRESS:
			return {...state, userAddress: action.payload}
		default:
			return state
	}
}

export default reducer;