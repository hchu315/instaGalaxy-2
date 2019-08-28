import React from 'react';
import NavBarSearchResults from './nav_bar_search_results';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput : '',
    }
    // this.updateSearch = this.updateSearch.bind(this)
    this.generateSearch = this.generateSearch.bind(this)
    // this.createCancel = this.createCancel.bind(this)
  }

  generateSearch(e) {
    this.props.fetchSearchedUsers(e.currentTarget.value)
  }

  // updateSearch(e) {
  //   e.preventDefault();
  //   this.setState({ usernameInput: e.currentTarget.value })
  // }

  // createCancel(e) {
  //   console.log(e.currentTarget)
  //   let cancelButton = React.createElement(
  //     'button',
  //     null,
  //     'hi'
  //   )
  //   console.log(cancelButton)
  //   // e.currentTarget.appendChild(cancelButton)
  // }

  render() {
    // let results = this.props.searchResults ? Object.values(this.props.searchResults).map(result  =>
    //   <div>{result.username}</div>      
    //   ) : null
      // console.log(this.state.usernameInput)
      // console.log(this.props.searchResults)
      // console.log('results:', results)
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

// onClick = { this.createCancel }
// value = { this.state.usernameInput }
// onKeyUp = { this.generateSearch }