import {
    RECEIVE_ALL_BOOKCLUBS,
    RECEIVE_BOOKCLUB
} from '../actions/bookclub_actions'

import {
    RESET_EVERYTHING
} from '../actions/all_actions'


const bookClubReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOKCLUB:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_BOOKCLUBS:
            return action.payload.data;
        case RESET_EVERYTHING:
            return {};
        default:
            return state;
    }
};

export default bookClubReducer