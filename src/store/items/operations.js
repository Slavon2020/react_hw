import {setItems, setLoading} from './actions';
import {dataRequest, dataRequestSuccess} from './actions';


const normalizeData = (data) => {
	return data.map(el => {
		el.isFavorite = false
		el.isAddedToCart = false
		return el;
	} )
}

const checkFavorites = (items) => {
	const favorites = localStorage.getItem('favorites')
	if (favorites) {
		return (
			items.map((item) => {
				item.isFavorite = favorites.includes(item.art)
				return item
			})
		)
	}
	return items
}

const checkAddedToCart = (items) => {
	const addedToCart = localStorage.getItem('cart')
	if(addedToCart) {
		return (
			items.map((item) => {
				item.isAddedToCart = addedToCart.includes(item.art)
				return item
			})
		)
	}
	return items
}

export const getData = () => (dispatch) => {
	dispatch(dataRequest())
	dispatch(setLoading(true))
	fetch('http://localhost:3000/items.json')
		.then(res => {
			if (res.ok) {
				dispatch(dataRequestSuccess())
				res.json()
					.then(res => {
						let normalizedData = normalizeData(res)
						normalizedData =  checkFavorites(normalizedData)
						normalizedData = checkAddedToCart(normalizedData)
						dispatch(setItems(normalizedData))
					})
			}
			dispatch(setLoading(false))
		})
}

export const toggleLocalStorageOperation = (localStorageKey, art, items) => {
	const field = localStorageKey === 'cart' ? 'isAddedToCart' : 'isFavorite'
	const newItems = items.map(item => {
		if (item.art === art) {
			item[field] = !item[field]
			return item;
		}
		return item;
	})
	let arr = JSON.parse(localStorage.getItem(localStorageKey))
	if (!arr) {
		localStorage.setItem(localStorageKey, JSON.stringify([art]))
	} else {
		if (arr.includes(art)) {
			arr = arr.filter(id => id !== art)
			localStorage.setItem(localStorageKey, JSON.stringify(arr))
		} else {
			arr.push(art)
			localStorage.setItem(localStorageKey, JSON.stringify(arr))
		}
	}
	return newItems;
}

