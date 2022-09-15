import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

require('@testing-library/jest-dom');

describe('Test for Header component', () => {
  const pageHeader = render(
    <Router>
      <Header />
    </Router>,
  );

  const links = screen.getAllByRole('link');

  test('Render the Header correctly', () => {
    expect(pageHeader).toMatchSnapshot();
  });

  test('Check for number of links in Header', () => {
    expect(links).toHaveLength(4);
  });

  test('Check for Home link in Header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
  });

  test('Check for Calculator link in Header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
    expect(calculatorLink).toBeInTheDocument();
  });

  test('Check for Quote link in Header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const quoteLink = screen.getByRole('link', { name: 'Quote' });
    expect(quoteLink).toBeInTheDocument();
  });

  /* Checks for proper Links */

  test('Check for right Home link in Header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/Math-Magicians-RX/');
  });

  test('Check for right Calculator link in Header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
    expect(calculatorLink).toHaveAttribute('href', '/Math-Magicians-RX/calculator');
  });

  test('Check for right Quote link in Header', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const quoteLink = screen.getByRole('link', { name: 'Quote' });
    expect(quoteLink).toHaveAttribute('href', '/Math-Magicians-RX/quote');
  });
});
