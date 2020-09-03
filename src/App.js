import React from 'react';
import logo from './TPS_Crest.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the home of Theta Pi Sigma at the University of Colorado!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about us
        </a>
      </header>
    </div>
  );
}

export default App;
