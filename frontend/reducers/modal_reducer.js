import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const modalReducer = (oldState = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case RECEIVE_POST:
      return merge({}, oldState, { post: action.post })
    default:
      return oldState;
  };
};

export default modalReducer;
