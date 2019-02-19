import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {getDevicesWatch} from "./containers/devices/actions";

import rootReducer from './rootReducer';

const middlewares = [thunkMiddleware];

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares)),
);

store.subscribe(()=>{
  const state = store.getState();
  getDevicesWatch(store.dispatch, state);
});

export default store