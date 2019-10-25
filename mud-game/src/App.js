import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './components/Game.js';
import LoginRegister from './components/LoginRegister.js';
import PrivateRoute from './PrivateRoute';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={LoginRegister} />
        <PrivateRoute path='/' component={Game} />
      </Switch>
    );
  }
}

export default App;
