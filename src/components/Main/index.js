import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../Home';
import AboutPage from '../AboutPage';
import Modal from '../Modal';
import './index.css';

const Main = ({ location }) => (
    <div className="main flex-center flex-column">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 200, exit: 200 }}
          classNames="fade">

          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>

      <Modal />
    </div>
);

export default withRouter(Main);
