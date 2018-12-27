import React, { Component } from 'react';

import NavHeader from './components/NavHeader';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavHeader />
        <Main />
      </div>
    );
  }
}

export default App;
