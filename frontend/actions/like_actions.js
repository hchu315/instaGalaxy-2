import * as LikeAPIUtil from '../utils/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
})

export const createLike = (postId) => dispatch => (
  LikeAPIUtil.createLike(postId).then(like => dispatch(receiveLike(like)))
);

export const deleteLike = (postId) => dispatch => (
  LikeAPIUtil.deleteLike(postId).then(like => dispatch(removeLike(like)))
);
