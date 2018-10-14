import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_form_container';
import FeedContainer from './feed/feed_container';
import GreetingContainer from './greeting/greeting_container';
// import NavBarContainer from './nav_bar/nav_bar_container';
import Errors from './errors/error';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';


const App = () => (
  <div className="login">
      <Switch>
        <AuthRoute exact path="/" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/feed" component={FeedContainer} />
        <Route exact path="/greeting" component={GreetingContainer} />
        <Route component={Errors} />

        // add error Redirect to '/'
      </Switch>
    <footer className="footer-container">
      <div className="footer-inner-container">
        <nav className="footer-nav-bar">
          <ul className="footer-nav-itemlist">
            <li className="footer-nav-items"><a className="footer-nav-links" href="">About us</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Support</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Press</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">API</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Jobs</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Privacy</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Terms</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Directory</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Profiles</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Hashtags</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Language</a></li>
          </ul>
          <span className="copyright-logo">© 2018 Instagram</span>
        </nav>
      </div>
    </footer>
  </div>
);

export default withRouter(App);

// <Route path="/" component={NavBarContainer} />
// <Redirect to="/notfound" component={Errors} />
