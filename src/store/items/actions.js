
import {DATA_REQUEST, DATA_REQUEST_SUCCESS, SET_ITEMS, SET_LOADING} from './types';

export const setItems = (data) => ({type: SET_ITEMS, payload: data})

export const setLoading = (data) => ({type: SET_LOADING, payload:data})

export const dataRequest = () => ({type: DATA_REQUEST})

export const dataRequestSuccess = () => ({type: DATA_REQUEST_SUCCESS})