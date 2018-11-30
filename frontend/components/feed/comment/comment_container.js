import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/comment_actions';
import Comment from './comment_form';

const mapStateToProps = (state, ownProps) => {
  // console.log(state.entities.comments)
  return {
    comments: Object.values(state.entities.comments)
  }
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  // fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
