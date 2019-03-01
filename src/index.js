import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { menus } from './reducers';

import * as serviceWorker from './serviceWorker';
import loadable from './utils/loadable';

import './index.css';

const LoadableApp = loadable('App', 200);

const rootReducer = (state = {}, action) => ({menus: menus(state.menus, action)});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const container = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadableApp />
    </BrowserRouter>
  </Provider>,
  container
);

serviceWorker.register();
