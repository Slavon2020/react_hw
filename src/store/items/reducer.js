import {SET_ITEMS, SET_LOADING} from './types';

const initialStore = {
	items: [],
	isLoading: true
}

const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case SET_ITEMS:
			return {...state, items: action.payload}
		case SET_LOADING:
			return {...state, isLoading: action.payload}
		default:
			return state
	}
}

export default reducer;