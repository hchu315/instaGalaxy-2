// import GreetingContainer from './greeting_container';
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  logoutHandler (){
    this.props.logout().then(
    this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="user-page-container">
          <header className="user-header-container">
            <button onClick={this.logoutHandler.bind(this)}>Log out</button>
          </header>
        </div>
      </div>
  )}
}

export default Greeting;

// {this.props.currentUser}
