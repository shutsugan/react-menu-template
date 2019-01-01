import React from 'react';
import { connect } from 'react-redux';

import {
  getLogo,
  getSlogan
} from '../../reducers/menus';

import Logo from '../Logo';
import NavItems from '../NavItems';
import Search from '../Search';

import './index.css';

const NavHeader = ({logo, slogan}) => (
    <div className="nav-header flex-center flex-row">
        <Logo logo={logo} label={slogan} />
        <NavItems />
        <Search />
    </div>
);

const mapStateToProps = state => {
  return {
    logo: getLogo(state),
    slogan: getSlogan(state)
  }
};

export default connect(mapStateToProps)(NavHeader);
