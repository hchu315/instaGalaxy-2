import * as PostAPIUtil from '../utils/post_api_util';
import * as LikeAPIUtil from '../utils/like_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts: posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

// const removePost = (post) => ({
//   type: REMOVE_POST,
//   postId: post.id
// });

export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))

);

export const fetchPost = (id) => dispatch => (
  PostAPIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => dispatch => (
  PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

// export const updatePost = (post) => dispatch => (
//   PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
// );
//
// export const deletePost = (id) => dispatch => (
//   PostAPIUtil.deletePost(id).then(postId => dispatch(removePost(postId)))
// );

export const createLike = (postId) => dispatch => (
  LikeAPIUtil.createLike(postId).then(post => dispatch(receivePost(post)))
);

export const deleteLike = (postId) => dispatch => (
  LikeAPIUtil.deleteLike(postId).then(post => dispatch(receivePost(post)))
);
