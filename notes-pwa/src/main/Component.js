import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import rs from '../config/routes';
import Header from '../containers/header';
import Home from '../containers/home';
import Auth from '../containers/auth';
import './Main.scss';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import rs from '../config/routes';

const defaultMapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultOptions={defaultMapOptions}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));


class App extends Component {
  render() {
    return (
      <main className="main">
        <Header />
        <Auth />
        {/*{*/}
          {/*console.log("main", this.props.auth.ok)*/}
        {/*}*/}
        {/*{*/}
          {/*this.props.auth.ok &&*/}
          {/*<div className="main__section main__section_width">*/}
            {/*<Home />*/}
          {/*</div>*/}
        {/*}*/}

        <div id="controls" className="nicebox">
          <div>
            <select id="census-variable">
              <option value="https://storage.googleapis.com/mapsdevsite/json/DP02_0066PE">Percent of population over 25
                that completed high
                school
              </option>
              <option value="https://storage.googleapis.com/mapsdevsite/json/DP05_0017E">Median age</option>
              <option value="https://storage.googleapis.com/mapsdevsite/json/DP05_0001E">Total population</option>
              <option value="https://storage.googleapis.com/mapsdevsite/json/DP02_0016E">Average family size</option>
              <option value="https://storage.googleapis.com/mapsdevsite/json/DP03_0088E">Per-capita income</option>
            </select>
          </div>
        </div>

        <MyMapComponent
          // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div>Loading...</div>}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />



        <div className="main__section main__section_width">
          <Home />
        </div>

        <Switch>
          <Route
            exact
            path={rs.home}
            component={Home}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
