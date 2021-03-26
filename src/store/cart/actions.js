import {CLEAR_CART, UPDATE_USER_ADDRESS} from './types';

export const updateUserAddressAction = (data) => ({type: UPDATE_USER_ADDRESS, payload: data});
export const clearCartAction = () => ({type: CLEAR_CART});