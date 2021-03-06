import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LogoutModal from './logout_modal';
import PostShowModal from './post_show_modal';
import { createLike, deleteLike } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    modal: state.ui.modal,
    currentUser: ownProps.currentUser.username,
    photoUrl: ownProps.currentUser.photoUrl,
  })
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout()),
  createLike: (postId) => dispatch(createLike(postId)),
  deleteLike: (postId) => dispatch(deleteLike(postId)),
});

function Modal({ modal, closeModal, logout, currentUser, photoUrl, createLike, deleteLike }) {
  if (!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'logout':
      component = <LogoutModal 
        logout={ logout } 
        closeModal={ closeModal }  
        />;
      break;
    case modal:
      component = <PostShowModal 
        currentUser={ currentUser } 
        photoUrl={ photoUrl} 
        post={ modal.post }
        createLike={ createLike }
        deleteLike={ deleteLike }
        closeModal={ closeModal }
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
