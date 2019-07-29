import React from "react";
import { connect } from 'react-redux';
import { fetchComments } from "../../../actions/comment_actions";
import { closeModal } from "../../../actions/modal_actions";
import CommentIndex from "./comment_index";

const mapStateToProps = (state, ownProps) => {
  return ({
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id],
    postId: ownProps.postId,
  })
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
