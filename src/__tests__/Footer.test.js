import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

require('@testing-library/jest-dom');

describe('Test for Footer component', () => {
  const pageFooter = render(
    <Router>
      <Footer />
    </Router>,
  );

  const links = screen.getAllByRole('link');

  test('Render the Footer correctly', () => {
    expect(pageFooter).toMatchSnapshot();
  });

  test('Check for number of links in Footer', () => {
    expect(links).toHaveLength(1);
  });

  test('Check for right GitHub link in Footer', () => {
    render(
      <Router>
        <Footer />
      </Router>,
    );
    const profileLink = screen.getByRole('link');
    expect(profileLink).toHaveAttribute('href', 'https://github.com/PraisesPJMT');
  });
});
