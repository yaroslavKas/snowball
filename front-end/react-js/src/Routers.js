import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from "./containers/About";
import Messages from "./containers/Messages";
import Player from "./containers/Player";

const Routes = () => (
  <Switch>
    <Route path='/about' component={About}/>
    <Route exact path='/messages' component={Messages}/>
    <Route path='/messages/:number' component={Player}/>
  </Switch>
);

export default  Routes;