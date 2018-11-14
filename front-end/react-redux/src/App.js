import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
// import playlists from "./reducers/playlists";

import User from './components/User';
import Year from './components/Year';
import setYearAction from './actions/ActionYear';
import { setToggleAction, setToggleActionFalse } from './actions/ActionToggle';
import { getNotesAction, setCreateNote, deleteNote } from './actions/ActionNotes';
import { submitLogin } from './actions/ActionAuth';
import toggle from "./reducers/dropDown";

import {Link, NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';

import Home from './containers/Home';
import Tab from './components/Tab';
import Routes from './routers';
import notes from "./reducers/notes";
import auth from "./reducers/auth";
// import load from 'utils/request'

// const User = ({match}) => {
//   return (<h1>Welcome user {match.params.username}</h1>)
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'ttt',
      titleNote: '',
      bodyNote: '',
      email: '',
      password: '',
      tabsTitle: [
        {id: 1, name: 'Info'},
        {id: 2, name: 'Calendar'},
        {id: 3, name: 'Videos'},
      ]
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes= {};


  onBtnToggleFalse = (e) => {


    if (e.target.textContent !== 'Toggle') {
      this.props.setToggleFunctionFalse()
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.titleNote,
      text: this.state.bodyNote
    };

    this.props.setCreateFunction(data);
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  };

  login = (e) => {
    e.preventDefault();

    const allData = { ...this.state };
    const data = {
      email: allData.email,
      password: allData.password
    };

    this.props.submitLogin(data);

    console.log('data', data);
    console.log('auth', auth);
  };

  onTitleChange = (e) => {
    this.setState({ titleNote: e.target.value });
  };

  onBodyChange = (e) => {
    this.setState({ bodyNote: e.target.value });
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

          <form>
            <input onChange={this.handleEmail} type="email" placeholder="Email" value={this.state.email}/>
            <input onChange={this.handlePassword} type="text" placeholder="Password" value={this.state.password}/>
            <button type="submit" onClick={this.login} value="Submit" >Login</button>
          </form>
          <Year
            year={this.props.year}
            setYear={this.props.setYearFunction}
            setToggle={this.props.setToggleFunction}
            setToggleFalse={this.props.setToggleFunctionFalse}
            stateDropDown={this.props.stateDropDown}
            notesList={this.props.notes}
            setNotesFunction={this.props.setNotesFunction}
            deleteNote={this.props.deleteNote}

          />
          {/*<button*/}
            {/*onClick={this.props.onGetNotes}*/}
          {/*>*/}
            {/*Get notes*/}
          {/*</button>*/}
          <Tab
            amountTitle={this.state.tabsTitle}
          />

          {/*<form action={'http://localhost:8081/notes'} method="POST"  className="note-form" id="note-form">*/}
          <form className="note-form" id="note-form">
            <input type="text" onChange={this.onTitleChange} value={this.state.titleNote}/>
            <input type="text" onChange={this.onBodyChange} value={this.state.bodyNote}/>
            <button type="submit" onClick={this.onSubmit} value="Submit">submit</button>
          </form>




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
    stateDropDown: state.toggle.stateDropDown,
    notes: state.notes.stateNotesList,
    auth: state.auth.login
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
    },
    setNotesFunction: notesList => {
      dispatch(getNotesAction(notesList))
    },
    setCreateFunction: notesList => {
      dispatch(setCreateNote(notesList))
    },
    deleteNote: data => {
      dispatch(deleteNote(data))
    },
    submitLogin: auth => {
      dispatch(submitLogin(auth))
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
