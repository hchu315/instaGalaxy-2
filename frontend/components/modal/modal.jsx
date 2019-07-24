import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LogoutModal from './logout_modal';
import PostShowModal from './post_show_modal';
import { fetchComments } from '../../actions/comment_actions';
import { fetchPost, createLike, deleteLike } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    modal: state.ui.modal,
    currentUser: ownProps.currentUser.username,
    photoUrl: ownProps.currentUser.photoUrl
  })
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout()),
  fetchComments: () => dispatch(fetchComments()),
  createLike: (postId) => dispatch(createLike(postId)),
  deleteLike: (postId) => dispatch(deleteLike(postId)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
});

function Modal({ modal, closeModal, logout, fetchComments, currentUser, photoUrl, fetchPost, createLike, deleteLike}) {
  if (!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'logout':
      component = <LogoutModal logout={ logout } closeModal={ closeModal }  />;
      break;
    case modal:
      component = <PostShowModal 
        currentUser={ currentUser } 
        photoUrl={ photoUrl} 
        fetchComments= { fetchComments }
        post={ modal.post }
        fetchPost={ fetchPost }
        createLike={ createLike }
        deleteLike={ deleteLike }
        // liked={ modal.post.liked }
        // key={ modal.post.liked }
         />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background"   onClick={closeModal}>
      <div className="modal-child" onClick={e =>  e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
