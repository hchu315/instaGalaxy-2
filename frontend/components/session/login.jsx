import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.login(this.state).then(this.props.history.push('/feed'));
  }

  render(){
    return (
      <div className='login-form-container'>
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
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
          <input type='submit' value='login' />
        </form>
      </div>
    </div>
    )

  }
}

export default Login;
