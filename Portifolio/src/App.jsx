// App.js
import React from 'react';
import Header from './components/Header';
import MainMenu from './components/Main';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <div>
      <main>
      <Header />
      </main>
      <MainMenu />
      <AboutMe />
    </div>
  );
};


export default App;