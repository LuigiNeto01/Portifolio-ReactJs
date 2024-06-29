import React, { useEffect, useState } from 'react';
import './Main.css';
import ImagemPrincipal from './src/ImagemPrincipal.png';
import Typewriter from 'typewriter-effect/dist/core';
import text from './json/texts.json';
import pdf from './src/CV-LuigiNeto.pdf'

const MainMenu = () => {
  const [showButton, setShowButton] = useState(false);

      const handleDownload = () => {
        const pdfUrl = pdf; // Substitua pelo caminho do seu PDF
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'CV-LuigiNeto.pdf'); // Substitua pelo nome do arquivo que deseja
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }; 
  useEffect(() => {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 40,
    });

    typewriter
      .typeString('Hello, my name is<br /><span className="MeuNome" style="color: #018d29; font-size: 55px;">Luigi Neto Figueiredo</span><br />')
      .pauseFor(350)
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

          <button className='Curriculo' onClick={handleDownload}>{text.buttons.curriculo}</button>
          <button className='Curriculo' onClick={handleScrollToContact}>{text.buttons.contato}</button>

        </div>
      </div>
    </div>
  );
}

export default MainMenu;
