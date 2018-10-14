// import GreetingContainer from './greeting_container';
import React from 'react';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.logout = this.props.
  }

  logoutHandler (){
    this.props.logout().then(
    this.props.history.push('/login'));
  }

  render() {
    return (
      <div>
        <header>
          <h1>Greetings InstaGalaxy</h1>
        </header>
        <button onClick={this.logoutHandler.bind(this)}>Log out</button>
      </div>
  )}
}

export default Greeting;

// {this.props.currentUser}
