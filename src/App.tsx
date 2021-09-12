import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HMC ROOM DRAW </h1>
        <img src={process.env.PUBLIC_URL+'/santi.png'} className="App-logo" alt="logo" />
        <p>
         <i>**UNDER CONSTRUCTION**</i>
        </p>
        <a
          className="App-link"
          href="https://github.com/hmcroomdraw/hmcroomdraw-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's the Github Page!
        </a>
      </header>
    </div>
  );
}

export default App;