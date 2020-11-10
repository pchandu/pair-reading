import {
    RECEIVE_ALL_BOOKS, 
    RECEIVE_BOOK,
    REMOVE_ALL_BOOKS
} from '../actions/book_actions'

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOK:
            return Object.assign({}, state, {[action.payload.data._id]: action.payload.data});
        case RECEIVE_ALL_BOOKS:
            return action.payload.data;
        case REMOVE_ALL_BOOKS:
            return {};
        default:
            return state;
    }
};