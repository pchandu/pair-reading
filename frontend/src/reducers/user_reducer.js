import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER
} from '../actions/user_actions'

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_ALL_USERS:
            return action.payload.data;
        default:
            return state;
    }
};