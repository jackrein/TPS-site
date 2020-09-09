import React from 'react';
import logo from './TPS_Crest.svg';
import { Nav, Navbar } from 'react-bootstrap';
import './scss/App.scss';

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
      <Navbar bg="#87ceeb" variant="#414141" className="nav-link">
        <Navbar.Brand href="#home">
          <img
            src="/TPS_Logo1.png"
            width="auto"
            height="50"
            className="d-inline-block align-top"
            alt="Theta Pi Sigma Crest"
          />
        </Navbar.Brand>
        <Nav className="mr-auto nav-link">
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#links">Links</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <div className="App-main">
        <p id="intro">
          Welcome to the home of <b>Theta Pi Sigma</b> at the University of Colorado!
        </p>
      </div>
    </div>
  );
}

export default App;
