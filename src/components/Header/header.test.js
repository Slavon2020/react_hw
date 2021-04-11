import Header from './Header';
import {act} from 'react-dom/test-utils';
import {unmountComponentAtNode} from 'react-dom';
import {render} from '@testing-library/react';

let container;

jest.mock('../Nav/Nav', () => () => <div>Nav</div>);

describe('Testing Header.js', () => {
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container = null;
	});
	test('smoke test Header.js', () => {
		act(() => {
			render(<Header/>, container);
		})
	})
})