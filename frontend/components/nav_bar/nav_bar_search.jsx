import React from 'react';
import NavBarSearchResults from './nav_bar_search_results';
import { withRouter } from 'react-router-dom';

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

  // handleKeyDown(e) {
  //   e.preventDefault();
  // }

  handleClick(e) {
    e.preventDefault();
    this.setState({ searchInput: '' })
    // e.stopPropagation();
  }

  render() {
    // console.log(this.state.searchInput)
    return ( 
      <div >
        <input className="search-bar-test" onChange={this.generateSearch}  type="text"  placeholder='Search' value={this.state.searchInput} />
        {this.state.searchInput ? <NavBarSearchResults
          searchResults={this.props.searchResults}
          handleClick={this.handleClick}
          // key={this.props.searchResults.id}
          /> : null
        }
      </div>
        )
      }
}

export default withRouter(NavBarSearch);
// onKeyDown = { this.handleKeyDown }
// <section className="search-results-container">{results}</section>