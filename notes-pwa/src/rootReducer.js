import { combineReducers} from 'redux';

import notes from './containers/home/reducer';

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;