import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

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
      <div className="full-session-container">
      <div className="session-form-container">
        <div className="session-form">
          <div className="session-signup-container">
            <h1 className="signup-form-header">
              InstaGalaxy
            </h1>
            <h2 className="signup-text">
              Sign up to see photos and <br/>videos from your friends.
            </h2>
            <div className="signup-demo-button-container">
              <button onClick={this.handleDemo} className="signup-demo-button">Log in with Demo User</button>
            </div>
            <div className="border-or-border">
              <div className="signup-border-one"></div>
              <div className="signup-or-text">OR</div>
              <div className="signup-border-two"></div>
            </div>
            <form>
              <div className="signin-input-boxes">
                <div className="signup-box">
                  <input className="signup-input-text" type="text"
                    placeholder="Email"
                    value={this.state.email}
                  onChange={this.handleInput("email")}/>
                </div>
              </div>
              <div className="signin-input-boxes">
                <div className="signup-box">
                  <input className="signup-input-text" type="text"
                    placeholder="Full Name"
                    value={this.state.full_name}
                    onChange={this.handleInput("full_name")}/>
                </div>
              </div>
              <div className="signin-input-boxes">
                <div className="signup-box">
                  <input className="signup-input-text" type="text"
                    placeholder="Username"
                    value={this.state.username} onChange={this.handleInput("username")}/>
                </div>
              </div>
              <div className="signin-input-boxes">
                <div className="signup-box">
                  <input className="signup-input-text"
                     type="password"
                     placeholder="Password"
                     value={this.state.password} onChange={this.handleInput("password")}/>
                </div>
              </div>
              <div className="signup-demo-button-container">
              <button className="signup-demo-button" onClick={this.handleSubmit}>Sign Up</button>
              </div>
              <p className="signup-disclosure-container"><span>By signing up, you agree to our</span>
                <span>Terms, Data Policy and Cookies</span>
                <span>Policy.</span>
              </p>
            </form>
        </div>
        <div className="session-signup-container session-login-container">
          <span className="session-login">Have an account?
            <Link className="signup-login-link" to={'/'}> Log in</Link>
          </span>
        </div>
        <div className="session-links-container">
          <span>Get the app.</span>
        </div>
        <div className="something"></div>
      </div>
      </div>
      <Footer />
      </div>
    )

  }
}

export default Signup;
