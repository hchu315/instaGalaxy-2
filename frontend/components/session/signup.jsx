import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      full_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then(this.props.history.push('/feed'));
  }
  // is the history.push necessary?

  render(){
    return (
      <div className="session-form">
        <h3>
          Sign up to see photos and <br/>videos from your friends.
        </h3>
        <form>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
          </label>
          <br/>
          <label>
            Full Name:
            <input type="text" value={this.state.full_name} onChange={this.handleInput("full_name")}/>
          </label>
          <br/>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
          </label>
          <br/>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
          </label>
          <br/>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )

  }
}

export default Signup;
