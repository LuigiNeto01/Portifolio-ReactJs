// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const DarkMode = () => {
    document.body.classList.toggle("DarkMode");
  };

  return (
    <header className="header-wrapper">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className="Titulo">
        <h1>Portifólio</h1>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#contact">Contact</a>
        <a className="nav-link">///</a>
        <a className="nav-link" onClick={DarkMode}>DarkMode</a>
      </nav>
    </header>
  );
};

export default Header;
