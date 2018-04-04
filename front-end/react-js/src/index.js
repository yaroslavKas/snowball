import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router';

import SessionActions from './actions/SessionActions'
import SessionStore   from './stores/SessionStore';

import App from './App';
import LoginPage from "./containers/Authentication/LoginPage";
import LoggedInLayout from "./containers/Authentication/LoggedInLayout";

import TaskListsPage from "./containers/TaskListsPage";

import registerServiceWorker from './registerServiceWorker';
import AboutPage from './containers/About';
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
          <Route path='/lists' component={TaskListsPage}>
            {/*<Route path='/about' component={AboutPage} />*/}
            {/*<Route path='/lists/:id' component={TasksPage} />*/}
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