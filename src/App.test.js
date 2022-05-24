import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link')
  expect(linkElement).toBeInTheDocument();
});

test('has a correct link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link')
  expect(linkElement.href).toContain('https://reactjs.org');
});

test('has a correct text', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link')
  expect(linkElement).toHaveTextContent('Learn Automation Testing and Dev');
});
