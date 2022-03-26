import * as actions from "../actions";

import { combineReducers } from "redux";

export const apiData = (state = [], { type, dataVal, newData, user }) => {
  switch (type) {
    case actions.SET_API_DATA:
      return dataVal;
    case actions.SET_UPDATE_API_DATA:
      const newState = state.map((user) => {
        if (user.id === newData.id) {
          user.name = newData.name;
          user.email = newData.email;
          user.role = newData.role;
          return user;
        } else {
          return user;
        }
      });

      return newState;
    case actions.SET_DELETE_API_DATA:
      const _state = state.filter((newUser) => {
        if (newUser.isChecked !== true) {
          return newUser;
        }
      });

      return _state;

    default:
      return state;
  }
};

export const searchFromAPI = (state = [], { type, dataVal }) => {
  switch (type) {
    case actions.SET_SEARCH_FROM_API:
      return dataVal;
    default:
      return state;
  }
};
export const currentPage = (state = 0, { type, dataVal }) => {
  switch (type) {
    case actions.SET_CURRENT_PAGE:
      return dataVal;
    default:
      return state;
  }
};

export const perPageData = (state = [], { type, dataVal, val, newData }) => {
  switch (type) {
    case actions.SET_PER_PAGE_DATA:
      return dataVal;
    case actions.SET_UPDATE_PER_PAGE_DATA:
      return val;

    default:
      return state;
  }
};

export const searchData = (state = [], { type, dataVal, newData, user }) => {
  switch (type) {
    case actions.SET_SEARCHED_DATA:
      return dataVal;
    case actions.SET_DELETE_SEARCH_DATA:
      const _state = state.filter((newUser) => {
        if (newUser.id !== user.id) {
          return newUser;
        }
      });

      return _state;
    default:
      return state;
  }
};

export default combineReducers({
  apiData,
  searchFromAPI,
  currentPage,
  perPageData,
  searchData,
});
