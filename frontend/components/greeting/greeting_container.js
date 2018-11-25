import React from 'react';
import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import Greeting from './greeting';


const mapStateToProps = (state) => {

  // console.log(state);
  return ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
  });
};

const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchtoProps)(Greeting);
