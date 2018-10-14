import React from 'react';
import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Greeting);
