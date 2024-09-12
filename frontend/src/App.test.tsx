import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('test 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Articles/i);
  expect(linkElement).toBeInTheDocument();
});
