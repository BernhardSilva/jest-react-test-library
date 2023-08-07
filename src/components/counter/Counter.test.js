import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
	test('renders the Counter component', () => {
		render(<Counter />);
		expect(screen.getByText('Counter: 0')).toBeInTheDocument();
		expect(screen.getByText('Increment')).toBeInTheDocument();
	});

	test('increments the counter when the button is clicked', () => {
		render(<Counter />);
		const buttonElement = screen.getByText('Increment');
		fireEvent.click(buttonElement);
		expect(screen.getByText('Counter: 1')).toBeInTheDocument();
	});
});
