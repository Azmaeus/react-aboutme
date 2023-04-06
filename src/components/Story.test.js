import { render, screen } from '@testing-library/react';
import Story from './Story';

test('renders story', () => {
  render(<Story />);
  const storyElement = screen.getAllByText(/^\w.+[!?.]$/i)[0];
  expect(storyElement).toBeInTheDocument();
});
