import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './index';

describe('App component', () => {
    test('it renders', () => {
        render(<App />);

        // expect(screen.getByTestId(/Users/i)).toBeInTheDocument();
        const linkElement = screen.getByText(/Users/i);
        expect(linkElement).toBeInTheDocument();
    });
})