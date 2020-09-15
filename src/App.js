import React from 'react';
import logo from './TPS_Crest.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Router>
        <div>
          <ul>
            <li id="logo">
              <img
                src="/TPS_Logo1.png"
                width="auto"
                height="50"
                className="d-inline-block align-top"
                alt="Theta Pi Sigma Crest"
              />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="App-main">
      <p id="intro">
        Welcome to the home of <b>Theta Pi Sigma</b> at the University of Colorado!
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
}

function Events() {
  return (
    <div>
      <h2>Events</h2>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
}

function Links() {
  return (
    <div>
      <h2>Links</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
}

export default App;
