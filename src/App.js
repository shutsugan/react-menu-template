import React, { Component, Fragment } from 'react';
import Sidebar from "react-sidebar";
import FaBars from 'react-icons/lib/fa/bars';
import { connect } from 'react-redux';

import {
  getCategories,
  getCategory
} from './reducers/menus';
import { loading, fetchMenus, setCategory } from './actions/menus';
import loadable from './utils/loadable';

import './App.css';

const LoadableSidebarItem = loadable('components/SidebarItem', 200);
const LoadableError = loadable('components/Error', 200);
const LoadableNavHeader = loadable('components/NavHeader', 200);
const LoadableMain = loadable('components/Main', 200);

class App extends Component {
  state = {
    sidebarOpen: false,
    width: 0
  };

  componentDidMount() {
    this.props.dispatch(loading());
    this.props.dispatch(fetchMenus());
  }

  onSetSidebarOpen = _ => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleItem = ({target}) => {
    this.props.dispatch(setCategory(target.textContent));
    this.onSetSidebarOpen();
  };

  updateWindowDimensions = _ => {
    this.setState({width: window.innerWidth});
  };

  render() {
    let mql = '20%';
    if (window.innerWidth < 800) mql = '40%';
    if (window.innerWidth < 760) mql = '60%';
    if (window.innerWidth < 480) mql = '80%';

    const sidebarItems = this.props
      .categories
      .map((name, index) => (
        <LoadableSidebarItem
          key={index}
          name={name}
          category={this.props.category}
          handleItem={this.handleItem}
        />
      ));

    const sideContent = (
      <Fragment>
        <span className="sidebar__label">Categories</span>
        {sidebarItems}
      </Fragment>
    );

    return (
      <div className="app">
        <Sidebar
          sidebar={sideContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: {
            background: '#fff',
            width: mql,
            height: 'auto',
            position: 'fixed'
          } }}
        >
          <button
            className="app__sidebar-button"
            onClick={this.onSetSidebarOpen}>
            <FaBars />
          </button>
        </Sidebar>
        <LoadableError />
        <LoadableNavHeader />
        <LoadableMain />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: getCategories(state),
    category: getCategory(state)
  };
};

export default connect(mapStateToProps)(App);
