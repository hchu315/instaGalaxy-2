// import GreetingContainer from './greeting_container';
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.logout = this.props.
  }

  logoutHandler (){
    this.props.logout().then(
    this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <NavBar />
        <header>
          <h1>Greetings InstaGalaxy</h1>
        </header>
        <button onClick={this.logoutHandler.bind(this)}>Log out</button>
      </div>
  )}
}

export default Greeting;

// {this.props.currentUser}
