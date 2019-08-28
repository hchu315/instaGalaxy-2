import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROFILE_USER } from '../actions/user_actions';
import { RECEIVE_SEARCHED_USERS } from '../actions/search_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.user.id]: action.currentUser.user});
    case RECEIVE_PROFILE_USER:
      return merge({}, oldState, {[action.profileUser.user.id]: action.profileUser.user});
    case RECEIVE_SEARCHED_USERS:
      // return merge({}, oldState, {'search': action.users})
      return ({
        ...oldState, 
        search: action.users
      })
    default:
      return oldState;
  }
};

export default usersReducer;
