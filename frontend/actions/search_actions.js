import * as SearchAPIUtil from '../utils/search_api_util';

export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";

const receiveSearchedUsers = (users) => ({
  type: RECEIVE_SEARCHED_USERS,
  users: users
});

export const fetchSearchedUsers = (key) => (dispatch) => (
  SearchAPIUtil.fetchSearch(key).then(users => dispatch(receiveSearchedUsers(users)))
);

