import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Sidebar from './components/network__sidebar';
import Profile from './components/network__profile';
import Messages from './components/network__messages';
import rs from "../../config/routes";
import './Network.scss';

class Network extends Component {
  render() {
    return(
      <div className="network">
        <Sidebar/>
        <section>
          <Switch>
            <Route
              path={rs.network.profile}
              component={Profile}
            />
            <Route
              path={rs.network.messages}
              component={Messages}
            />
            {/*<Route*/}
              {/*path={rs.network.news}*/}
              {/*component={Profile}*/}
            {/*/>*/}
            {/*<Route*/}
              {/*path={rs.network.music}*/}
              {/*component={Profile}*/}
            {/*/>*/}
            {/*<Route*/}
              {/*path={rs.network.settings}*/}
              {/*component={Profile}*/}
            {/*/>*/}
          </Switch>
        </section>
      </div>
    )
  }
}

export default Network;