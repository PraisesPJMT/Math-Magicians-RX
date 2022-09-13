import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const Navigation = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      className: 'nav-home nav-link',
    },
    {
      id: 2,
      name: 'Calculator',
      path: '/',
      className: 'nav-calculator nav-link',
    },
    {
      id: 3,
      name: 'Quote',
      path: '/',
      className: 'nav-quote nav-link',
    },
  ];
  const NavBars = Navigation.map((nav) => (
    <Link
      to={nav.path}
      className={nav.className}
      key={nav.id}
    >
      {nav.name}
    </Link>
  ));
  return (
    <header className="header">
      <Link
        to="/"
        className="logo"
      >
        <h2>
          <span className="logo-left">Math</span>
          <span className="logo-right">Magician</span>
        </h2>
      </Link>
      <nav className="nav">
        { NavBars }
      </nav>
    </header>
  );
};

export default Header;
