import { RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMMENT:
      return merge({}, oldState, action.comment);
    default:
      return oldState;
  }
};

export default commentsReducer;
