import { UPDATE_BOOKCLUBS_FILTER, CLEAR_BOOKCLUBS_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    keywords: null,
    bookCnt: null,
    forumCnt: null,
    userCnt: null
});

const bookclubsFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BOOKCLUBS_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case CLEAR_BOOKCLUBS_FILTER:
            return defaultFilters;
        default:
            return state;
    }
};

export default routesFilterReducer;
