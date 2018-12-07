import React from "react";
import { connect } from 'react-redux';
import { fetchComments } from "../../../actions/comment_actions";
import CommentIndexItem from "./comment_index_item";

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return ({
    comments: Object.values(state.entities.comments),
    postId: ownProps.postId
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);
