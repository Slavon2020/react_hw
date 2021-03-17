import {SET_ITEMS, SET_LOADING, SET_OPENED_CARD_MODAL, SET_SHOW_ADD_TO_CART_MODAL} from './types';

export const setOpenedCardModal = (data) => ({type: SET_OPENED_CARD_MODAL, payload: data});
export const setShowAddToCartModal = (data) => ({type: SET_SHOW_ADD_TO_CART_MODAL, payload: data});
export const setItems = (data) => ({type: SET_ITEMS, payload: data})
export const setLoading = (data) => ({type: SET_LOADING, payload:data})