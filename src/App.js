import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import {useEffect} from 'react';
import Loader from './components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {setItems} from './store/items/actions';
import {getData} from './store/items/operations';
import {toggleLocalStorageOperation} from './store/items/operations';


function App() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items)
    const isLoading = useSelector(state => state.isLoading)

    const toggleLocalStorage = (localStorageKey, art) => {
        const newItems =  toggleLocalStorageOperation(localStorageKey, art, items)
        dispatch(setItems(newItems))
    }

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

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
