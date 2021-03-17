import React from 'react';
import './style.scss'

function Loader(props) {
	return (
		<div className='loader-wrap'>
				<div className="loader">
					<div className="side">
						<div className="left"></div>
						<div className="right"></div>
						<div className="top"></div>
						<div className="bottom"></div>
					</div>
				</div>
		</div>
	);
}

export default Loader;