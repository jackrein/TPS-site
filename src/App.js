import React from 'react';
import logo from './TPS_Crest.svg';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/TPS_Crest.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Theta Pi Sigma Crest"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
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
