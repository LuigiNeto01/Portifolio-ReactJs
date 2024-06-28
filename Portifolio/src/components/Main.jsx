import React, { useEffect, useState } from 'react';
import './Main.css';
import ImagemPrincipal from './src/ImagemPrincipal.png';
import Typewriter from 'typewriter-effect/dist/core';
import text from './json/texts.json';

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
      
      .typeString(text.areas.frontend)

      .pauseFor(350)
      .deleteChars(9)

      .typeString(text.areas.backend)

      .pauseFor(350)
      .deleteChars(8)

      .typeString(text.areas.fullstack)

      .pauseFor(300)
      .callFunction(() => {
        setShowButton(true);
      })
      .start();
  }, []);

  const handleScrollToContact = () => {
    document.getElementById('contact').scrollIntoView();
  };

  return (
    <div className="MainPage" id='home'>
      <div className="LeftContainer">
        <img src={ImagemPrincipal} alt="1" />
      </div>
      <div className="RightContainer">
        <h1 id="app" className="TextoNome"></h1>
        <div className={`botoes ${showButton ? 'visible' : ''}`}>

          <button className='Curriculo'>{text.buttons.curriculo}</button>
          <button className='Curriculo' onClick={handleScrollToContact}>{text.buttons.contato}</button>

        </div>
      </div>
    </div>
  );
}

export default MainMenu;
