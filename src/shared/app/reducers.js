import { combineReducers } from 'redux';

import playlistsReducer from '../playlists/reducer';

const rootReducer = combineReducers({
    playlists: playlistsReducer,
});

export default rootReducer;
