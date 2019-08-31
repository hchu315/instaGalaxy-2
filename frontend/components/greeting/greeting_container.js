import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId; //pulls id for the user profile to be displayed
  return ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[userId],
    posts: Object.values(state.entities.posts).reverse(),
    userId: userId
  });
};

const mapDispatchtoProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  openModal: () => dispatch(openModal('logout')),
  openPost: (img) => dispatch(openModal(img))
});

export default connect(mapStateToProps, mapDispatchtoProps)(Greeting);
