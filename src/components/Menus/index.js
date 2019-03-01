import React from 'react';
import { connect } from 'react-redux';

import {
  getMenus,
  getCategory,
  getByCategory,
  getSearch,
  getSearchMenus
} from '../../reducers/menus';
import { setMenu } from '../../actions/menus';
import loadable from '../../utils/loadable';

import './index.css';

const LoadableMenu = loadable('components/Menu', 200);

const Menus = ({menus, category, byCategory, search, searchResult, dispatch}) => {
  const handleClick = menu => dispatch(setMenu(menu));

  let menusList = [];
  let list = menus;

  if (category) list = byCategory;
  if (search) list = searchResult;

  menusList = list.map((menu, index) => (
      <LoadableMenu
        key={`${menu.name}-${index}`}
        menu={menu}
        handleClick={handleClick} />
  ));

  return (
    <div className="menus max-width flex-center">
      {menusList}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menus: getMenus(state),
    category: getCategory(state),
    byCategory: getByCategory(state),
    search: getSearch(state),
    searchResult: getSearchMenus(state)
  }
};

export default connect(mapStateToProps)(Menus);
