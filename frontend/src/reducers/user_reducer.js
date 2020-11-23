import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER,
    REMOVE_ALL_USERS
} from '../actions/user_actions'

import {
    RESET_EVERYTHING
} from '../actions/all_actions'


const userReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_USERS:
            return action.payload.data;
        case REMOVE_ALL_USERS:
            return {};
        case RESET_EVERYTHING:
            return {};
        default:
            return state;
    }
};

export default userReducer;