import React from 'react';

import './footer.css';

import logo from './copyleft.svg';

const Footer = () => (
  <footer className="footer-container">
    <img className="footer-logo" src={logo} alt="copyleft logo" />
    <span>Moises Gonzalez</span>
  </footer>
);

export default Footer;
