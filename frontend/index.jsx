import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { login } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser1) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser1.user.id]: window.currentUser1.user }
      },
      session: { id: window.currentUser1.user.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser1;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={ store }/>, root);
});
