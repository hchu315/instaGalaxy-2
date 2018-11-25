import * as CommentAPIUtil from '../utils/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
// export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = (comment) => ({
  type: RECEIVE_COMMENTS,
  comments: comments
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

// const removeComment = (comment) => ({
//   type: REMOVE_COMMENT,
//   comment
// })

export const createComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)))
);

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments().then((comments) => dispatch(receiveComments(comments)))
);

// export const deleteComment = (commentId) => (
//   CommentAPIUtil.deleteComment(commentId).then((comment) => dispatch(removeComment(comment)))
// );
