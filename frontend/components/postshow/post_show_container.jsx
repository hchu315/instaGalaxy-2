import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchComments } from '../../actions/comment_actions';
import { fetchPost, createLike, deleteLike } from '../../actions/post_actions';

const mapStateToProps = (state, props) => {
  return ({
    currentUser: state.entities.users[state.session.id].username,
    photoUrl: state.entities.users[state.session.id].photoUrl,
    post: props.location.state.post
  })
}

const mapDispatchToProps = (dispatch) => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    createLike: () => dispatch(createLike()),
    deleteLike: () => dispatch(deleteLike())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
  