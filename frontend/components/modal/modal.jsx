import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LogoutModal from './logout_modal';
import PostShowModal from './post_show_modal';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return ({
  modal: state.ui.modal,
  currentUser: ownProps.currentUser.username
  })
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
});

function Modal({ modal, closeModal, logout, currentUser }) {
  if (!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'logout':
      component = <LogoutModal logout={ logout } closeModal={ closeModal }  />;
      break;
    case modal:
      component = <PostShowModal modalUrl={ modal } currentUser={ currentUser } />
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
