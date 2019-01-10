import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      index: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
  }


  componentDidMount(){
    this.timerId = setInterval(() => this.switchImage(), 2500);
  }


  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  switchImage(){
      $(`.transitioning-image-${this.state.index%5}`)
        .toggleClass('fade-in');
      $(`.transitioning-image-${(this.state.index-1)%5}`)
        .toggleClass('fade-in').toggleClass('fade-out')
      $(`.transitioning-image-${(this.state.index-2)%5}`)
        .toggleClass('fade-out');

        this.setState({ index: (this.state.index + 1)});
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
          <div className="my_image">
            <div className="transitioning-images-container">
              <div className="transition-images transitioning-image-0 fade-in"/>
              <div className="transition-images transitioning-image-1"/>
              <div className="transition-images transitioning-image-2"/>
              <div className="transition-images transitioning-image-3"/>
              <div className="transition-images transitioning-image-4"/>
            </div>
          </div>
          <div className="login-links-form">
            <div className="login-form-container">
              <h1 className="login-form-header">instaGalaxy</h1>
              <div className="form-input-container">
                <form className="form-input-inner-container" onSubmit={this.handleSubmit}>
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
                  <div className="divider-container">
                    <div className="divider-line"></div>
                    <div className="divider-or">or</div>
                    <div className="divider-line"></div>
                  </div>
                  <a className="forgot-password" href="">Forgot password?</a>
                  <div className="facebook-link-container">
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className="signup-text-container">
                <span className="inner-signup-text-container">
                  <p>Don't have an account?</p>
                  <Link className="login-signup-text" to={'/signup'}>&nbsp;Sign up</Link>
                </span>
                <button className="demo-button" onClick={this.handleDemo}>Log in as Demo User</button>
              </div>
            </div>
            <div className="login-links">
              <p>Join the galaxy.</p>
              <div className="appstore-links">
              <a className="appstore-button-linkedin" href="https://www.linkedin.com/in/henry-chu-65578a13a/"></a>
              <a className="appstore-button-github" href="https://github.com/hchu315"></a>
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
