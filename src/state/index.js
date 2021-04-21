import { ADD_TOKEN, GET_TOKEN, REMOVE_TOKEN, SELECT_LIST } from 'config/enums';

//authentication
export const setToken = (token) => ({
  type: ADD_TOKEN,
  token,
});

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const removeToken = (token) => ({
  type: REMOVE_TOKEN,
  token,
});

export const selectTableList = (list) => ({
  type: SELECT_LIST,
  list,
});
