import React from 'react';
import './styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">
      <span className="copyright">© 2022 | </span>
      Created by
      <a
        href="https://github.com/PraisesPJMT"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        Praises Tula
        {' '}
      </a>
      under the CC license.
    </p>
  </footer>
);

export default Footer;
