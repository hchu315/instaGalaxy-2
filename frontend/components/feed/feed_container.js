import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Feed from './feed';


const mapStateToProps = (state) =>  {
  console.log(state)
  return ({
    posts: Object.values(state.entities.posts),
  currentUser: state.entities.users[state.session.id]
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
