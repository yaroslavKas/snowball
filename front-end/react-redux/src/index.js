import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from  'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
// import App from './App';
// import Home from './containers/Home';
import Routes from './routers';
import rootReducer from './reducers';

import api from './api';


// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

window.handleGoogleApiLoaded = () => {
  console.log('Api load');
  api.authorize({ immediate: false });
};

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
