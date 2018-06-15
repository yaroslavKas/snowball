import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
// import playlists from "./reducers/playlists";

import User from './components/User';
import Year from './components/Year';
import setYearAction from './actions/ActionYear';
import {setToggleAction, setToggleActionFalse} from './actions/ActionToggle';
import toggle from "./reducers/dropDown";

import {Link, NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';

import Home from './containers/Home';
import Tab from './components/Tab';
import Routes from './routers';

// const User = ({match}) => {
//   return (<h1>Welcome user {match.params.username}</h1>)
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'ttt',
      tabsTitle: [
        {id: 1, name: 'Info'},
        {id: 2, name: 'Calendar'},
        {id: 3, name: 'Videos'},
      ]
    };

    // this.second = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
  }

  static propTypes= {};


  onBtnToggleFalse = (e) => {

    if (e.target.textContent !== 'Toggle') {
      this.props.setToggleFunctionFalse()
    }
  };


  render() {

    const {
      tabsTitle,
    } = this.state;

    return (
      <BrowserRouter>
        {/*<div className="App">*/}
        <div className="App" onClick={this.onBtnToggleFalse}>
          {/*<User user={this.props.user}/>*/}
          <Year
            year={this.props.year}
            setYear={this.props.setYearFunction}
            setToggle={this.props.setToggleFunction}
            setToggleFalse={this.props.setToggleFunctionFalse}
            stateDropDown={this.props.stateDropDown}
          />
          <Tab
            amountTitle={this.state.tabsTitle}
          />


          {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<h1 className="App-title">Welcome to Reac{this.props.user}t</h1>*/}
          {/*</header>*/}
          {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}

          {/*<input type="text" value={this.state.value} onChange={this.handleAddTrack}/>*/}
          {/*<button onClick={this.addTrack}>Add track</button>*/}

          {/*<ul>*/}
          {/*{*/}
          {/*this.props.playlists.map((playlists, index) =>*/}
          {/*<li key={index}>{playlists}</li>*/}
          {/*)*/}
          {/*}*/}
          {/*</ul>*/}
          <Switch>
            {/*<Route path="/home" exact render={props => <Home {...props} />}/>*/}
            <Route path="/" exact render={() => {
              return (<h1>welcome default</h1>)
            }}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" render={() => {
              return (<h1>welcome about</h1>)
            }}/>
            <Route path="/user" component={User}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user,
    year: state.userInfo.year,
    stateDropDown: state.toggle.stateDropDown
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setYearFunction: year => {
      dispatch(setYearAction(year))
    },
    setToggleFunction: stateDropDown => {
      dispatch(setToggleAction(stateDropDown))
    },
    setToggleFunctionFalse: stateDropDown => {
      dispatch(setToggleActionFalse(stateDropDown))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(
//   //mapStateToProps
//   state => ({
//     tracks: state.tracks,
//     playlists: state.playlists
//   }),
//   //mapDispatchToProps
//   dispatch => ({
//     onAddTrack: (trackName) => {
//       dispatch({type: 'ADD_TRACK', payload: trackName});
//     }
//   })
// )(App);
