import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';

function Nav(props) {
	return (
		<nav className='nav'>
			<NavLink className='nav__link' to='/items'>Items</NavLink>
			<NavLink className='nav__link' to='/cart'>Cart</NavLink>
			<NavLink className='nav__link' to='/favorites'>Favorites</NavLink>
		</nav>
	);
}

export default Nav;