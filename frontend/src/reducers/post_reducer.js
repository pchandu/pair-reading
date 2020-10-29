import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST
} from '../actions/post_actions'

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_POSTS:
            return action.payload.data;
        default:
            return state;
    }
};