import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from "./containers/About";
import Messages from "./containers/Messages";
import Player from "./containers/Player";
import LoginPage from "./containers/LoginPage";
import LoggedInLayout from "./containers/LoggedInLayout";

import SessionStore   from './stores/SessionStore';


const Routes = () => (
  <Switch>
    <Route path='/login' component={LoginPage}/>
    <Route component={LoggedInLayout}>
      {/*<Route path='/About' component={About}/>*/}
    </Route>
    {/*<Route path='/messages/:number' component={Player}/>*/}
  </Switch>
);

// function requireAuth(nextState, replace) {
//   if (!SessionStore.isLoggedIn()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// }

export default  Routes;