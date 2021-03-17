import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import {useEffect} from 'react';
import Loader from './components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {setItems, setLoading} from './store/actions';




function App() {

    const dispatch = useDispatch();

    const items = useSelector(state => state.items)

    const isLoading = useSelector(state => state.isLoading)


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

    const toggleLocalStorage = (localStorageKey, art) => {
        const field = localStorageKey === 'cart' ? 'isAddedToCart' : 'isFavorite'
        const newItems = items.map(item => {
            if (item.art === art) {
                item[field] = !item[field]
                return item;
            }
            return item;
        })
        dispatch(setItems(newItems))
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
    }

    useEffect(() => {
        fetch('http://localhost:3000/items.json')
            .then(res => res.json())
            .then(res => {
                    let normalizedData = normalizeData(res)
                    normalizedData =  checkFavorites(normalizedData)
                    normalizedData = checkAddedToCart(normalizedData)
                    dispatch(setItems(normalizedData))
                    dispatch(setLoading(false))
            })
    }, [])

    return (
        <div className='app'>
            <Header/>
            <AppRoutes
                toggleLocalStorage={toggleLocalStorage}
                items={items}
            />
            {isLoading && <Loader/>}
        </div>
    );
}

export default App;
