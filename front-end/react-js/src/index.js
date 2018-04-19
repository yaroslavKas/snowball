import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router';

import SessionActions from './actions/SessionActions'
import SessionStore   from './stores/SessionStore';

import App from './App';
import LoginPage from "./containers/Authentication/LoginPage";
import LoggedInLayout from "./containers/LoggedInLayout";

import HomePage from './containers/HomePage';
import TaskListPage from './containers/TasksListPage';
import TasksPage from './containers/TasksListPage/components/TasksPage';
import AboutPage from './containers/AboutPage';

import './index.scss';

window.handleGoogleApiLoaded = () => {
  SessionActions.authorize(true, renderApp);
};

function renderApp()  {
  ReactDOM.render(
    <Router history={browserHistory}>
      {/*<Redirect from='/' to='/login' />*/}
      <Route path='/' component={App}>
        <Route path='/login' component={LoginPage} />
        <Route component={LoggedInLayout} onEnter={requireAuth}>
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/tasks-list' component={TaskListPage}>
            <Route path='/tasks-list/:id' component={TasksPage} />
          </Route>
        </Route>
      </Route>
    </Router>,
    document.getElementById('root')
  );
}

function requireAuth(nextState, replace) {
  if (!SessionStore.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}