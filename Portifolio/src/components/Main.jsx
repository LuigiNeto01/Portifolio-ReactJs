import React, { useEffect, useState } from 'react';
import './Main.css';
import ImagemPrincipal from './src/ImagemPrincipal.png';
import Typewriter from 'typewriter-effect/dist/core';
import './Header.css';
const MainMenu = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 75,
    });

    typewriter
      .typeString('Olá eu sou o <br /><span className="MeuNome" style="color: #018d29; font-size: 55px;">Luigi Neto Figueiredo</span><br />')
      .typeString('Dev Front-End')
      .pauseFor(350)
      .deleteChars(9)
      .typeString('Back-End')
      .pauseFor(350)
      .deleteChars(8)
      .typeString('Full Stack')
      .pauseFor(300)
      .callFunction(() => {
        setShowButton(true);
      })
      .start();
  }, []);

  return (
    <div className="MainPage">
      <div className="LeftContainer">
        <img src={ImagemPrincipal} alt="1" />
      </div>
      <div className="RightContainer">
        <h1 id="app" className="TextoNome"></h1>
        <div className={`botoes ${showButton ? 'visible' : ''}`}>
          <button className='Curriculo'>Download CV</button>
          <button className='Curriculo'>Contato</button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
