import React from 'react';
import NavBarSearchResults from './nav_bar_search_results';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.generateSearch = this.generateSearch.bind(this)
  }

  generateSearch(e) {
    if (e.currentTarget.value == '') {
      
      return;
    }
    this.props.fetchSearchedUsers(e.currentTarget.value)
  }


  render() {
    return ( 
      <div >
        <input className="search-bar-test" onChange={this.generateSearch}  type="text"  placeholder='Search' />
        {/* <section className="search-results-container">{results}</section> */}
        <NavBarSearchResults 
          searchResults={this.props.searchResults}
          key={this.props.searchResults}
        />
      </div>
    )
  }
}

export default NavBarSearch;