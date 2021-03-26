import itemsReducer from './items/reducer';
import modalReducer from './modal/reducer'
import userAddressReducer from './cart/reducer'
import {combineReducers} from 'redux';

export const reducer = combineReducers({
	items: itemsReducer,
	modal: modalReducer,
	userAddress: userAddressReducer
})