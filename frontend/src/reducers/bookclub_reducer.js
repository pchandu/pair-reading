import {
    RECEIVE_ALL_BOOKCLUBS,
    RECEIVE_BOOKCLUB
} from '../actions/bookclub_actions'

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOKCLUB:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_BOOKCLUBS:
            return action.payload.data;
        default:
            return state;
    }
};