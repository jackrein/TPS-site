import React from 'react';
import logo from './TPS_Crest.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="align-left">Zeta Chapter</span>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="align-right">Established 2018</span>
      </header>
      <div className="App-main">
        <p>
          Welcome to the home of Theta Pi Sigma at the University of Colorado!
        </p>
      </div>
    </div>
  );
}

export default App;
