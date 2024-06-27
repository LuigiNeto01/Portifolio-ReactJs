// App.js
import React from 'react';
import Header from './components/Header';
import MainMenu from './components/Main';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos'; // Importe com a primeira letra maiúscula

const App = () => {
  return (
    <div>
      <main>
        <Header />
      </main>
      <MainMenu />
      <AboutMe />
      <Projetos /> 
    </div>
  );
};

export default App;
