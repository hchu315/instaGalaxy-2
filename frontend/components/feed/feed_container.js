import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Feed from './feed';


const mapStateToProps = (state) => ({
  // debugger;
  posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
