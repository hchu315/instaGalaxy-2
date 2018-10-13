import React from 'react';
import { Link } from 'react-router-dom';


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
      <section className="login-page">
        <div className="full-form-container">
          <div className="my_image"/>
          <div className="login-links-form">
            <div className="login-form-container">
              <h1>InstaGalaxy</h1>
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
                  <input className="submit" type='submit' value='login' />
              </form>
            </div>
            <div>
              <div>
                Don't have an account?
                <Link to={'/signup'}> Sign up</Link>
              </div>
            </div>
            <div className="login-links">
              Join the galaxy
              <a href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="Apple Store" height="30%" width="30%"></img></a>
              <br/>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DW0-33AAEAAHLuYBrhDxcrl94J_zF%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="Google Play" height="30%" width="30%"></img></a>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Login;
