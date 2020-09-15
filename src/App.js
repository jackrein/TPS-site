import React from 'react';
import logo from './TPS_Crest.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './scss/App.scss';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Links from './components/Links';
import Contact from './components/Contact';

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

export default App;
