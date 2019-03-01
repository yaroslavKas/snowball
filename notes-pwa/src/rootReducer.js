import { combineReducers} from 'redux';

import notes from './containers/home/reducer';
import registration from './containers/auth/reducer';

const rootReducer = combineReducers({
  notes,
  registration
});

export default rootReducer;