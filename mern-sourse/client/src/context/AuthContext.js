import {createContext} from 'react';

function noop(){}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logOut: noop,
  isAuthenticated: false
});

export default AuthContext;