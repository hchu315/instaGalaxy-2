import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/dummy_actions';
import merge from 'lodash/merge';

const dummyReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, oldState, action.comment);
    case RECEIVE_COMMENTS:
      return merge({}, oldState, action.comments);
    default:
      return oldState;
  }
};

export default dummyReducer;