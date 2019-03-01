import React from 'react';
import { connect } from 'react-redux';

import {
  getLogo,
  getSlogan
} from '../../reducers/menus';
import loadable from '../../utils/loadable';

import './index.css';

const LoadableLogo = loadable('components/Logo', 200);
const LoadableNavItems = loadable('components/NavItems', 200);
const LoadableSearch = loadable('components/Search', 200);

const NavHeader = ({logo, slogan}) => (
    <div className="nav-header flex-center flex-row">
        <LoadableLogo logo={logo} label={slogan} />
        <LoadableNavItems />
        <LoadableSearch />
    </div>
);

const mapStateToProps = state => {
  return {
    logo: getLogo(state),
    slogan: getSlogan(state)
  }
};

export default connect(mapStateToProps)(NavHeader);
