import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, oldState, {[action.postId]:})
    case REMOVE_LIKE:
      return merge({}, oldState, action.postId)
    default:
      return oldState;
  }
};
