import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import loadable from '../../utils/loadable';

import './index.css';

const LoadableHome = loadable('components/Home', 200);
const LoadableAboutPage = loadable('components/AboutPage', 200);
const LoadableModal = loadable('components/Modal', 200);

const Main = ({ location }) => (
    <div className="main flex-center flex-column">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 200, exit: 200 }}
          classNames="fade">

          <Switch location={location}>
            <Route exact path="/" component={LoadableHome} />
            <Route path="/about" component={LoadableAboutPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>

      <LoadableModal />
    </div>
);

export default withRouter(Main);
