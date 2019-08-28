import { connect } from 'react-redux';
import NavBar from './nav_bar';
import NavBarSearch from './nav_bar_search';
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


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
// export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
