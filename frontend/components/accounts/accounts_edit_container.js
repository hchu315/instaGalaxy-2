import { connect } from 'react-redux';
import React from 'react';
import AccountsEdit from './accounts_edit';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentUser: state.entities.users[state.session.id],
    
  }
}

// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps, null)(AccountsEdit);