import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from "./components/About";
import Messages from "./Messages";
import Player from "./Player";

const Routes = () => (
  <Switch>
    <Route path='/about' component={About}/>
    <Route exact path='/messages' component={Messages}/>
    <Route path='/messages/:number' component={Player}/>
  </Switch>
);

export default  Routes;