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
import Upload from './upload/upload';
import Errors from './errors/error';
// import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

// change login to main and flex boxed it to column
const App = () => (
  <div className="main">
      <Switch>
        <AuthRoute exact path="/" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/feed" component={FeedContainer} />
        <ProtectedRoute exact path="/greeting" component={GreetingContainer} />
        <ProtectedRoute exact path="/upload" component={Upload} />
        <Route component={Errors} />
      </Switch>

  </div>
);

export default withRouter(App);

// <Redirect to="/notfound" component={Errors} />
