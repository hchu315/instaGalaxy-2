import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_COMMENT:
      // debugger
      return merge({}, oldState, action.comment);
    default:
      return oldState;
  }
};

export default commentsReducer;
