import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.css';

function App() {
  return (
    <Router>
     <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* <li>
          <Link to="/protected">Recipe List</Link>
        </li> */}
      </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <PrivateRoute exact path="/protected" component={RecipeList} /> */}
          <Route path="/login"component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
