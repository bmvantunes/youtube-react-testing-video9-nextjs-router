import { render, screen } from '@testing-library/react';
import React from 'react';
import { Hello } from './Hello';

it('renders "Hello World"', () => {
  render(<Hello />);
  const element = screen.getByText(/Hello World/);
  expect(element).toBeInTheDocument();
});
