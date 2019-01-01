import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loading, fetchMenus } from './actions/menus';

import NavHeader from './components/NavHeader';
import Main from './components/Main';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loading());
    this.props.dispatch(fetchMenus());
  }

  render() {
    return (
      <div className="app">
        <NavHeader />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {...state};
};

export default connect(mapStateToProps)(App);
