import React from 'react';
import logo from './TPS_Crest.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="align-left">
          <b id="TPS">Theta Pi Sigma</b><br/>
          <em>at University of Colorado</em>
        </span>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="align-right">
          <b>Zeta Chapter</b> <br/>
          <em>established 2018</em>
        </span>
      </header>
      <div className="App-main">
        <p id="intro">
          Welcome to the home of <b>Theta Pi Sigma</b> at the University of Colorado!
        </p>
      </div>
    </div>
  );
}

export default App;
