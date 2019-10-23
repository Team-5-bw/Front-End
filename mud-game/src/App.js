import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from './components/Game.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
// import Register from './components/Register.js';
// import Login from './components/Login.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* { <Route path='/register' component= {Register} /> */}
        <Route path='/login' component={Login} />}
        {/* <Route /*ProtectedRoute* path='/' component= {Game} /> */}
        <Route /*ProtectedRoute*/ path='/register' component={Register} />
      </Switch>
    );
  }
}

export default App;
