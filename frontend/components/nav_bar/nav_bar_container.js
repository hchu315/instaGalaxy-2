import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { fetchSearchedUsers } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    searchResults: state.entities.users.search
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchedUsers: (key) => dispatch(fetchSearchedUsers(key))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));