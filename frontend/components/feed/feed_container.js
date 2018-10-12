import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchtoProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchtoProps)(Feed);
