import {
    FETCH_GISTS__SUCCEEDED,
} from './actions';

const initialState = [];

const homeReducers = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_GISTS__SUCCEEDED:
            return payload.gists;
        default:
            return previousState;
    }
};

export default homeReducers;
