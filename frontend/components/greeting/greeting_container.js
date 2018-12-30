import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
  });
};

const mapDispatchtoProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  openModal: () => dispatch(openModal('logout')),
  openPost: (img) => dispatch(openModal(img))
});

export default connect(mapStateToProps, mapDispatchtoProps)(Greeting);
