import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Html from './Html';
import Css from './Css';
import Js from './Js';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/HTML">index.html</Link>
              </li>
              <li>
                <Link to="/CSS">index.css</Link>
              </li>
              <li>
                <Link to="/JS">index.js</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/HTML">
            <Html />
          </Route>
          <Route path="/CSS">
            <Css />
          </Route>
          <Route path="/JS">
            <Js />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;