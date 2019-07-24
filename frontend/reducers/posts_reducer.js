import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      // debugger
      return merge({}, oldState, { [action.post.id]:action.post })
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, action.currentUser.posts)
    case REMOVE_POST:
      let newState = merge({}, oldState);
      delete newState[action.postId];
      return newState;
    default:
      return oldState;
  }
};

export default postsReducer;
