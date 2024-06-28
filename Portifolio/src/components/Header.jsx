// Header.js
import React, { useState } from 'react';
import './Main.css';
import texts from './json/texts.json'
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
        <h1>{texts.header.title}</h1>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a className="nav-link" href="#home">{texts.header.home}</a>
        <a className="nav-link" href="#about">{texts.header.about}</a>
        <a className="nav-link" href="#ability">{texts.header.ability}</a>
        <a className="nav-link" href="#contact">{texts.header.contact}</a>
        <a className="nav-link">{texts.header.split}</a>
        <a className="nav-link" onClick={DarkMode}>{texts.header.darkmode}</a>
      </nav>
    </header>
  );
};

export default Header;
