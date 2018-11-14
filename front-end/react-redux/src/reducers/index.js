import { combineReducers} from 'redux';

import userInfo from './info';
import tracks from './track';
import playlists from './playlists';
import toggle from './dropDown';
import notes from './notes';
import auth from './auth';

const rootReducer = combineReducers({
  tracks,
  playlists,
  userInfo,
  toggle,
  notes,
  auth
});

export default rootReducer;