import React from 'react';
import './style.scss'


function Logo(props) {
	return (
		<div className='logo'>
			<a href='/' className='logo-link'>
				<div className='logo-img-wrap'>
					<img src="http://localhost:3000/images/logo-icon.jpg" className='logo-img' alt='sportswear'/>
				</div>
				<p className='logo-text'>SPORTSWEAR</p>
			</a>
		</div>
	);
}

export default Logo;