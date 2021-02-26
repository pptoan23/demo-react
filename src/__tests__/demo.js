import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link 1', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByText(/XXXXX/i);
  // expect(linkElement).toBeInTheDocument();

  // const demoElement = screen.getByTestId("demo");

  // expect(demoElement.textContent).toBe("Here is the exception 1");

  // const demox = screen.getByTestId("demox");
  // expect(demox.textContent).toBe(null)


});


// test('renders learn react link 2', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Here is the exception/i);
//   // const linkElement = screen.getByText(/XXXXX/i);
//   expect(linkElement).toBeInTheDocument();
// });