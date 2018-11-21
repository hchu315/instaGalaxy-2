import { connect } from 'react-redux';
import { fetchPosts, createLike, deleteLike } from '../../actions/post_actions';
import { createComment } from '../../actions/comment_actions';
import Feed from './feed';


const mapStateToProps = (state) =>  {
  // console.log(state)
  return ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createLike: (postId) => dispatch(createLike(postId)),
  deleteLike: (postId) => dispatch(deleteLike(postId)),
  createComment: (postId) => dispatch(createComment(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
