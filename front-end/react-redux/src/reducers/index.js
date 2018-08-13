import { combineReducers} from 'redux';

import userInfo from './info';
import tracks from './track';
import playlists from './playlists';
import toggle from './dropDown';
import notes from './notes';

const rootReducer = combineReducers({
  tracks,
  playlists,
  userInfo,
  toggle,
  notes
});

export default rootReducer;