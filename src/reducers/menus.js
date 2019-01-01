import { createSelector } from 'reselect';

import { initialMenuState } from '../store';
import {
  LOADING,
  FETCH_MENUS_SUCCEEDED,
  FETCH_MENUS_ERRORED,
  START_SEARCH,
  SET_MENU,
  SET_CATEGORY,
  SET_INFORMATIONS
} from '../actions/menus';

const logo = state => state.menus.informations.logo_name;
const slogan = state => state.menus.informations.slogan;
const title = state => state.menus.informations.title;
const slug = state => state.menus.informations.slug;
const search = state => state.menus.search;
const searchMenus = state => state.menus.searchMenus;
const category = state => state.menus.category;
const items = state => state.menus.menus;
const menu = state => state.menus.menu;
const message = state => state.menus.error;

export const getLogo = createSelector([logo], logo => logo);
export const getSlogan = createSelector([slogan], slogan => slogan);
export const getTitle = createSelector([title], title => title);
export const getSlug = createSelector([slug], slug => slug);
export const getSearch = createSelector([search], search => search);
export const getSearchMenus = createSelector([searchMenus], menus => menus);
export const getCategory = createSelector([category], category => category);
export const getMenu = createSelector([menu], menu => menu);
export const getError = createSelector([message], message => message);

export const getCategories = createSelector([items], categories => {
    return categories.map(category => category.name);
});

export const getByCategory = createSelector(
  [items, category],
  (items, category) => {
      return items.filter(item => item.name.includes(category))
        .reduce((acc, menu) => acc.concat(menu.items), []);
});

export const getMenus = createSelector([items], items => {
  return items.reduce((acc, menu) => acc.concat(menu.items), []);
});

export default function menus(state = initialMenuState, {type, payload}) {
  switch(type) {
    case LOADING:
      return {
        ...state,
        isLoading: payload
      }
    case FETCH_MENUS_SUCCEEDED:
      return {
        ...state,
        menus: payload,
        isLoading: false
      }
    case FETCH_MENUS_ERRORED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case START_SEARCH:
      const menus = state.menus
        .reduce((acc, menu) => acc.concat(menu.items), [])
        .filter(item => item.name.includes(payload));

      return {
        ...state,
        searchMenus: menus,
        search: payload
      }
    case SET_MENU:
      return {
        ...state,
        menu: payload
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: payload
      }
    case SET_INFORMATIONS:
      return {
        ...state,
        informations: payload
      }
    default:
      return state;
  }
}
