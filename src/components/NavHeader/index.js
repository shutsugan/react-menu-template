import React from 'react';

import Logo from '../Logo';
import NavItems from '../NavItems';
import Search from '../Search';

import './index.css';

const NavHeader = _ => (
    <div className="nav-header flex-center flex-row">
        <Logo logo="oceanprime" label="Bar" />
        <NavItems />
        <Search />
    </div>
);

export default NavHeader;
