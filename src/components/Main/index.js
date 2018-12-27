import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import './index.css';

const Main = _ => (
    <div className="main flex-center flex-column">
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
);

export default Main;
