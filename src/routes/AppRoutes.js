import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import CardsList from '../pages/CardsList/CardsList';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function AppRoutes(props) {

	const {toggleLocalStorage, items} = props;
	return (
		<Fragment>
			<Switch>
				<Redirect exact from='/' to='items'/>
				<Route path='/items' render={ () => <CardsList items={items} toggleLocalStorage={toggleLocalStorage} show='all'/>}/>
				<Route path='/cart' render={ () => <CardsList items={items} toggleLocalStorage={toggleLocalStorage} show='cart'/>}/>
				<Route path='/favorites' render={ () => <CardsList items={items} toggleLocalStorage={toggleLocalStorage} show='favorites'/>}/>
				<Route path='*' component={NotFoundPage}/>
			</Switch>
		</Fragment>
	);
}

export default AppRoutes;