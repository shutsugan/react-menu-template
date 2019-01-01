import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const NavItems = _ => (
    <nav className="nav-items flex-row">
        <Link className="nav__item" to="/">Home</Link>
        <Link className="nav__item" to="/about">About</Link>
    </nav>
);

export default NavItems;
