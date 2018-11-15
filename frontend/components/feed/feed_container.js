import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Feed from './feed';
import { createLike, deleteLike } from
'../../actions/like_actions';


const mapStateToProps = (state) =>  {
  console.log(state)
  return ({
    posts: Object.values(state.entities.posts),
  currentUser: state.entities.users[state.session.id]
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createLike: (postId) => dispatch(createLike(postId)),
  deleteLike: (postId) => dispatch(deleteLike(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
