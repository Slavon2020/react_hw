import itemsReducer from './items/reducer';
import modalReducer from './modal/reducer'
import {combineReducers} from 'redux';

export const reducer = combineReducers({
	items: itemsReducer,
	modal: modalReducer
})