import React from 'react';
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Sobre">
            <Sobre />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;