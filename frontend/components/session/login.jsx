import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.login(this.state).then(this.props.history.push('/feed'));
  }

  handleDemo(e){
    e.preventDefault();
    this.props.login({username: "Demo_User", password: "demo_user"}).then(this.props.history.push('/feed'));
  }

  render(){
    return (
      <section className="login-page">
        <div className="full-form-container">
          <div className="my_image"/>
          <div className="login-links-form">
            <div className="login-form-container">
              <h1 className="login-form-header">instaGalaxy</h1>
              <div className="form-input-container">
                <form onSubmit={this.handleSubmit}>
                  <div className="username-input-container">
                    <label>
                      <input className="username-input" type="text" value={this.state.username} onChange={this.handleInput("username")}
                      placeholder="Username"/>
                    </label>
                  </div>
                  <div className="password-input-container">
                    <label>
                      <input className="password-input" type="password" value={this.state.password} onChange={this.handleInput("password")}
                      placeholder="Password"/>
                    </label>
                  </div>
                  <div className="login-button-container">
                    <input className="login-button" type='submit' value='Log in' />
                  </div>
                  <a className="forgot-password2" href="">Forgot password?</a>
                </form>
              </div>
            </div>
            <div>
              <div className="signup-text-container">
                <span className="inner-signup-text-container">
                  <p>Don't have an account?</p>
                  <Link className="signup-text" to={'/signup'}>&nbsp;Sign up</Link>
                </span>
                <button className="demo-button" onClick={this.handleDemo}>Log in as Demo User</button>
              </div>
            </div>
            <div className="login-links">
              <p>Join the galaxy.</p>
              <div className="appstore-links">
              <a className ="appstore-buttons" href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="Apple Store" height="40%" width="40%"></img></a>
              <a className ="appstore-buttons" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DW0-33AAEAAHLuYBrhDxcrl94J_zF%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="Google Play" height="40%" width="40%"></img></a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default Login;
