import Button from './Button';
import {unmountComponentAtNode} from 'react-dom';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

let container;

describe('Testing Button.js', () => {

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	})

	afterEach(() => {
		unmountComponentAtNode(container);
		container = null;
	})

	test('Smoke test Button.js', () => {
		act(() => {
			render(<Button text='test-text'/>, container);
		})
	})

	test('check text in Button.js', () => {
		act(() => {
			render(<Button text='test-text'/>, container);
		})

		const btnText = document.getElementById('test-btn').textContent;
		expect(btnText).toBe('test-text')
	})

})
