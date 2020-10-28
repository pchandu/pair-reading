import { UPDATE_BOOKS_FILTER, CLEAR_BOOKS_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    keywords: null,
    author: null,
    description: null,
    userCnt: null,
    forumCnt: null,
    bookclubCnt: null,
});

const booksFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BOOKS_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case CLEAR_BOOKS_FILTER:
            return defaultFilters;
        default:
            return state;
    }
};

export default routesFilterReducer;
