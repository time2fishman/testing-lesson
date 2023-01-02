// Coming from our node_modules
// render: 'render' something, usually a component
// screen: like 'document' when we were doing DOM manipulation in unit 1. 
// We're going to search through it for elements
import { render, screen } from '@testing-library/react';
// The App component
import App from './App';

// define the name of the test as a string as the first argument to our 'test'
// example here... "Renders learn React link"
test('Renders learn React link', () => {
  //render the App component
  render(<App />);
  // defining a variable that looks for specific text in the parentheses 
  // the /i means that is is NOT case sensitive
  const linkElement = screen.getByText(/learn react/i);
  // expect that text/element to be in the document
  expect(linkElement).toBeInTheDocument();
});
