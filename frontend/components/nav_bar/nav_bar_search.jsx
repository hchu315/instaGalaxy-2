import React from 'react';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput : '',
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.generateSearch = this.generateSearch.bind(this)
    this.createCancel = this.createCancel.bind(this)
  }

  generateSearch(e) {
    this.props.fetchSearchedUsers(this.state.usernameInput)
  }

  updateSearch(e) {
    e.preventDefault();
    this.setState({ usernameInput: e.currentTarget.value })
  }

  createCancel(e) {
    console.log(e.currentTarget)
    let cancelButton = React.createElement(
      'button',
      null,
      'hi'
    )
    console.log(cancelButton)
    // e.currentTarget.appendChild(cancelButton)
  }

  render() {
    return ( 
      <div onClick={this.createCancel}>
        <input className="search-bar-test" onChange={this.updateSearch} onKeyUp={this.generateSearch} type="text" value={this.state.usernameInput} placeholder='Search' />
      </div>
    )
  }
}

export default NavBarSearch;