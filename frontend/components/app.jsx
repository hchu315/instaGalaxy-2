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
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';


const App = () => (
  <div className="login">
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/feed" component={FeedContainer} />
      <Route path="/greeting" component={GreetingContainer} />
      <Redirect to="/login" />
      // add error Redirect to '/'
      // add logout redirect to
    </Switch>
  </div>
);

export default withRouter(App);

// <Route path="/" component={NavBarContainer} />
