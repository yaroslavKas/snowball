import { combineReducers} from 'redux';

import notes from './containers/home/reducer';
import auth from './containers/auth/reducer';

const rootReducer = combineReducers({
  notes,
  auth
});

export default rootReducer;