import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Test examples title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test examples/i);
  expect(linkElement).toBeInTheDocument();
});
