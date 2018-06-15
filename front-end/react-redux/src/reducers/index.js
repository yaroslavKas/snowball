import { combineReducers} from 'redux';

import userInfo from './info';
import tracks from './track';
import playlists from './playlists';
import toggle from './dropDown';

const rootReducer = combineReducers({
  tracks,
  playlists,
  userInfo,
  toggle
});

export default rootReducer;