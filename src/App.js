import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavHeader from './components/NavHeader';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavHeader logo="Ocean Prime" label="bar" />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
