import React from 'react';
import { connect } from 'react-redux';
import { createComment, fetchComments } from '../../../actions/comment_actions';
import Comment from './comment_form';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
  comments: Object.values(state.entities.comments)}
};

const mapDispatchtoProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

export default CommentContainer;
