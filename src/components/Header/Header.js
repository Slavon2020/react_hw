import React from 'react';
import Nav from '../Nav/Nav';
import './style.scss';
import Logo from '../Logo/Logo';

function Header() {
	return (
		<header className='header'>
			<Logo/>
			<Nav/>
		</header>

	);
}

export default Header;