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

// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='whole'>
      <Link to="/" className="header-link">
        <h1>instaGalaxy</h1>
      </Link>

      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/feed" component={FeedContainer} />
  </div>
);

export default withRouter(App);
