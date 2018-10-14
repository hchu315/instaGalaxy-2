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
    this.handleDemo = this.handleDemo.bind(this)
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

  handleDemo(e){
    e.preventDefault();
    this.props.login({username: "Demo_User", password: "demo_user"}).then(this.props.history.push('/feed'));
  }

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

        <button onClick={this.handleDemo}>Log in as Demo User</button>
      </div>
    )

  }
}

export default Signup;
