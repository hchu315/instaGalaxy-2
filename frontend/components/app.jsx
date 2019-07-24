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
import PostShowContainer from './postshow/post_show_container';
import Upload from './upload/upload';
import AccountsEditContainer from './accounts/accounts_edit_container';
import Errors from './errors/error';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

// change login to main and flex boxed it to column
const App = () => (
  <div className="main">
      <Switch>
        <AuthRoute exact path="/" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/feed" component={FeedContainer} />
        <ProtectedRoute exact path="/users/:userId" component={GreetingContainer} />
        <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
        <ProtectedRoute exact path="/upload" component={Upload} />
        <ProtectedRoute exact path="/accounts/edit" component={AccountsEditContainer} />
        <Route component={Errors} />
      </Switch>

  </div>
);

export default withRouter(App);

// <Redirect to="/notfound" component={Errors} />
