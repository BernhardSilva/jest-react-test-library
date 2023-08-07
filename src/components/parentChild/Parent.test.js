import { render, screen, fireEvent } from '@testing-library/react';
import Parent from './Parent';

describe('<Parent />', () => {
	test('updates the parent component text when the child component button is clicked', () => {
        render(<Parent />);
        
        const inputElement = screen.getByRole('textbox');
        const submitButtonElement = screen.getByRole('button', {name: /Submit/i});

        fireEvent.change(inputElement, {target: {value: 'Hello'}});
        fireEvent.click(submitButtonElement);

        const updatedTextElement = screen.getByText(/Text: Hello/i);
        expect(updatedTextElement).toBeInTheDocument();
    });
});
