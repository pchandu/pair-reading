import {
    RECEIVE_ALL_FORUMS,
    RECEIVE_FORUM
} from '../actions/forum_actions'

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        // case RECEIVE_FORUM:
        //     return action.payload.books;
        case RECEIVE_ALL_FORUMS:
            return action.payload.data;
        default:
            return state;
    }
};