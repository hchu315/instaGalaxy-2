import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  modal: state.ui.modal
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

function Modal({modal, closeModal}) {
  if (!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'logout':
      component = <Logout
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
