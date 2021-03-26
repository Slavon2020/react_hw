import React from 'react';
import './style.scss'

function Input(props) {
	const {placeholder, form, type, field, className } = props
	const {name} = field
	return (
		<div className='input-wrap'>
		<label>
			<input className={className} placeholder={placeholder} type={type} {...field} />
		</label>
		{form.errors[name] && form.touched[name] && (
			<span className="error">{form.errors[name]}</span>
		)}
		</div>


);

}

export default Input;