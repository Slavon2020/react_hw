import React from 'react';
import Input from '../Input/Input';
import './style.scss';
import {Form, Formik, Field} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserAddressAction} from '../../store/cart/actions';
import {getItems} from '../../store/items/selectors';
import {setItems} from '../../store/items/actions';
// import * as Yup from 'yup';


// const validationFormSchema = Yup.object().shape({
// 	name: Yup.string()
// 		.required('Required')
// 		.min(2, 'This is too short name!'),
// 	lastname: Yup.string()
// 		.required('Required')
// 		.min(2, 'Too short lastname!'),
// 	age: Yup.number()
// 		.required('Required')
// 		.positive(),
// 	address: Yup.string()
// 		.required('Required')
// 		.min(10, 'Too short address!'),
// 	tel: Yup.number()
// 		.required('Required')
// 		.min(10, 'Too short phone number!')
// })


function AddressForm(props) {

	const dispatch = useDispatch();
	const items = useSelector(getItems());
	let count = 1;

	const submitForm = (values) => {
		const {name, lastname, age, address, tel} = values
		console.log('SUBMIT FORM:', name, lastname, age, address, tel)
		dispatch(updateUserAddressAction({
			name: name,
			lastname: lastname,
			age: age,
			address: address,
			tel: tel
		}))

		const updatedItems = items.map(item => {
			const {name, color, price} = item;
			if (item.isAddedToCart) {
				console.log(`${count++}. ${name} ${color} ${price}$`)
				item.isAddedToCart = false;
				return item;
			}
			return item;
		})

		dispatch(setItems(updatedItems));
		localStorage.removeItem('cart');

	};

	const validateForm = (values) => {
		const errors = {}
		const {name, lastname, age, address, tel} = values

		if (!name) {
			errors.name = "Name is required field"
		} else if (name.length < 2) {
			errors.login = "Too short name"
		}

		if (!lastname) {
			errors.lastname = "Lastname is required field"
		} else if (lastname.length < 2) {
			errors.login = "Too short lastname"
		}

		if (!age) {
			errors.age = "Age is required field"
		} else if (age.length < 0) {
			errors.password = "Age cannot be less than 0"
		}

		if (!address) {
			errors.confirmPassword = "Address is required field"
		} else if (address.length < 10) {
			errors.confirmPassword = "To short address"
		}

		if(!tel) {
			errors.tel = "Tel is required field"
		} else if (String(tel).length < 10) {
			errors.tel = "Too short phone number"
		}
		return errors
	}

	return (
		<div className='address-form'>
			<Formik
				initialValues = {{
					name: '',
					lastname: '',
					age: '',
					address: '',
					tel: ''
				}}
				onSubmit={submitForm}
				validate={validateForm}
				// validationSchema={validationFormSchema}
			>
				{(formikProps) => {
					return (
						<Form className='formik'>
							<Field component={Input} className='input-field' name="name" type="text" placeholder="Enter your name"/>
							<Field component={Input} className='input-field' name="lastname" type="text" placeholder="Enter your lastname"/>
							<Field component={Input} className='input-field' name="age" type="number" placeholder="Enter your age"/>
							<Field component={Input} className='input-field' name="address" type="text" placeholder="Enter your address"/>
							<Field component={Input} className='input-field' name="tel" type="tel" placeholder="Enter your phone"/>
							<button className='checkout-btn' type='submit'>Checkout</button>
						</Form>
					)
				}}
			</Formik>
		</div>
	);
}

export default AddressForm;