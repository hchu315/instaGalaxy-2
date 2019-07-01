import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const userId = ownProps.match.params.userId; //pulls id for the user profile to be displayed
  // console.log(state.entities.users[state.session.id])
  // console.log(state.entities.users[userId])
  // console.log(Object.values(state.entities.posts))
  // console.log(ownProps.match.params.userId)
  return ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[userId],
    posts: Object.values(state.entities.posts).reverse(),
  });
};

const mapDispatchtoProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  openModal: () => dispatch(openModal('logout')),
  openPost: (img) => dispatch(openModal(img))
});

export default connect(mapStateToProps, mapDispatchtoProps)(Greeting);
