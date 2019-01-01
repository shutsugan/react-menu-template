import mocked_data from './mock.json';

export const LOADING = 'LOADING';
export const FETCH_MENUS_SUCCEEDED = 'FETCH_MENUS_SUCCEEDED';
export const FETCH_MENUS_ERRORED = 'FETCH_MENUS_ERRORED';
export const START_SEARCH = 'START_SEARCH';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_INFORMATIONS = 'SET_INFORMATIONS';

export const loading = _ => ({
  type: LOADING,
  payload: true
});

export const startSearch = search => ({
  type: START_SEARCH,
  payload: search
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
})

export const fetchMenusSucceeded = menus => ({
  type: FETCH_MENUS_SUCCEEDED,
  payload: menus
});

export const fetchMenusErrored = message => ({
  type: FETCH_MENUS_ERRORED,
  payload: message
});

export const setInformations = informations => ({
  type: SET_INFORMATIONS,
  payload: informations
});

export const fetchMenus = _ => {
  return async dispatch => {
    try {
      // const url = '';
      // const res = await fetch(url);
      // const data = await res.json();
      //
      // const menus = data.categories;
      // const informations = data.informations;

      const menus = mocked_data.categories;
      const informations = mocked_data.informations;

      dispatch(fetchMenusSucceeded(menus));
      dispatch(setInformations(informations));
    } catch ({message}) {
      dispatch(fetchMenusErrored(message));
    }
  }
};
