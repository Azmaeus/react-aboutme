import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders my portrait', () => {
  render(<Header />);
  const titleElement = screen.getByAltText(/profile/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders my name', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Eric F. Olsen/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders my occupation', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Software Engineer/i);
  expect(titleElement).toBeInTheDocument();
});
