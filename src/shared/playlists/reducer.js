import {
    LOAD_PLAYLISTS,
} from './actions';
import { playlists } from './playlists';

const initialState = [];

const playlistReducer = (previousState = initialState, { type }) => {
    switch (type) {
        case LOAD_PLAYLISTS:
            return playlists;
        default:
            return previousState;
    }
};

export default playlistReducer;
