import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SessionActions from './actions/SessionActions'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

window.handleGoogleApiLoaded = () => {
  SessionActions.authorize(true, renderApp);
};

function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root'));
  registerServiceWorker();
}


