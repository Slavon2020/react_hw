import Modal from './Modal';
import { render, screen } from '@testing-library/react';

const modalText = 'test-modal-text';
const modalHeaderText = 'test-modal-header-text';

const mockFunc = jest.fn();

describe('testing Modal.js', () => {
	test('smoke test Modal.js', () => {
		render(<Modal toggleAddToCartModal={mockFunc} actions={[]} text={modalText} header={modalHeaderText}/>);
		screen.getByText(modalText);
		screen.getByText(modalHeaderText);
	});

	test('testing by snapshot in Modal.js', () => {
		const { container } =  render(<Modal toggleAddToCartModal={mockFunc} actions={[]} text={modalText} header={modalHeaderText}/>);
		expect(container).toMatchSnapshot()
	})
})