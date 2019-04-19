import * as DummyAPIUtil from "../utils/dummy_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const createComment = (comment) => dispatch => (
  DummyAPIUtil.createComment(comment).then( comment => dispatch(receiveComment(comment)))
);

export const fetchComments = () => dispatch => (
  DummyAPIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
);