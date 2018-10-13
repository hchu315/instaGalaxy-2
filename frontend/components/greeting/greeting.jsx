// import GreetingContainer from './greeting_container';
import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.logout = this.props.
  }

  render() {
    return (
      <div>
        <header>
          <h1>Greetings InstaGalaxy</h1>
        </header>
        <button onClick={this.props.logout}>Log out</button>
      </div>
  )}
}

export default Greeting;

// {this.props.currentUser}
