import React from 'react';
import { connect } from 'react-redux';
// import PostShowModal from '../modal/post_show_modal';
import PostShow from './post_show';
import { fetchComments } from '../../actions/comment_actions';
import { fetchPost, createLike, deleteLike } from '../../actions/post_actions';

const mapStateToProps = (state, props) => {
  // console.log(state)
  // console.log(props)
  // console.log(props.location.state.post)
  return ({
    currentUser: state.entities.users[state.session.id].username,
    photoUrl: state.entities.users[state.session.id].photoUrl,
    post: props.location.state.post
    //     photoUrl={ photoUrl } 
    //     post={ modal.post }
  })
}

const mapDispatchToProps = (dispatch) => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    createLike: () => dispatch(createLike()),
    deleteLike: () => dispatch(deleteLike())
})

// export default PostShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
  