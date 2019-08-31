import React from 'react';
import NavBarSearchResults from './nav_bar_search_results';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
    this.generateSearch = this.generateSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  generateSearch(e) {
    this.setState({ searchInput: e.currentTarget.value })
    if (e.currentTarget.value == '') {
      return;
    } else {
      this.props.fetchSearchedUsers(e.currentTarget.value)
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ searchInput: '' })
  }

  render() {
    return ( 
      <div >
        <input className="search-bar-test" onChange={this.generateSearch}  type="text"  placeholder='Search' value={this.state.searchInput} />
        {this.state.searchInput ? <NavBarSearchResults
          searchResults={this.props.searchResults}
          handleClick={this.handleClick}
          /> : null
        }
      </div>
        )
      }
}

export default NavBarSearch;