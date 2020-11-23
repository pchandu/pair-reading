import {
    RECEIVE_ALL_FORUMS,
    RECEIVE_FORUM
} from '../actions/forum_actions'

import {
    RESET_EVERYTHING
} from '../actions/all_actions'


const forumReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FORUM:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_FORUMS:
            return action.payload.data;
        case RESET_EVERYTHING:
            return {};
        default:
            return state;
    }
};

export default forumReducer;