// src/App.js
import React from 'react';
import Header from './components/Header';
import MainMenu from './components/Main';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos';
import ContactForm from './components/Contact';
import FadeInSection from './components/FadeInSection';
import './components/Main.css';  // Certifique-se de que seus estilos globais estejam importados aqui


const App = () => {
  return (
    <div>
      <main>
        <Header />
      </main>
      <FadeInSection>
        <MainMenu />
      </FadeInSection>
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Projetos />
      </FadeInSection>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
    </div>
  );
};

export default App;