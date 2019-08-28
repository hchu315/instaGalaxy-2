import React from 'react';
import NavBarSearchResults from './nav_bar_search_results';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
    this.generateSearch = this.generateSearch.bind(this)
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
    console.log(e.currentTarget.className)
    // console.log(e.currentTarget.style)
    // e.currentTarget.className.style = 'hidden'
    // e.currentTarget.className = `${e.currentTarget.className}:empty`
  }

  render() {
    return ( 
      <div >
        <input className="search-bar-test" onChange={this.generateSearch}  type="text"  placeholder='Search' />
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
      {/* <section className="search-results-container">{results}</section> */}