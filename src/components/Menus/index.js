import React from 'react';
import { connect } from 'react-redux';

import {
  getMenus,
  getCategory,
  getByCategory,
  getSearch,
  getSearchMenus
} from '../../reducers/menus';

import Menu from '../Menu';
import './index.css';

const Menus = ({menus, category, byCategory, search, searchResult}) => {
  const handleClick = menu => {
    console.log(menu);
  };

  let menusList = [];
  let list = menus;

  if (category) list = byCategory;
  if (search) list = searchResult;

  menusList = list.map((menu, index) => (
      <Menu
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
