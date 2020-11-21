import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST
} from '../actions/post_actions'
import {
    RESET_EVERYTHING
} from '../actions/all_actions'

const postReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_POSTS:
            return action.payload.data;
        case RESET_EVERYTHING:
            return {};
        default:
            return state;
    }
};

export default postReducer;