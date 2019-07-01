import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROFILE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  // console.log(action)
  Object.freeze(oldState);
  // debugger
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.user.id]: action.currentUser.user});
    case RECEIVE_PROFILE_USER:
        // debugger

      return merge({}, oldState, {[action.profileUser.user.id]: action.profileUser.user});
    default:
      return oldState;
  }
};

export default usersReducer;
