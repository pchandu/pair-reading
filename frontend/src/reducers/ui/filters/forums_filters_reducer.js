import { UPDATE_FORUMS_FILTER, CLEAR_FORUMS_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    keywords: null,
    postCnt: null
});

const forumsFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FORUMS_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case CLEAR_FORUMS_FILTER:
            return defaultFilters;
        default:
            return state;
    }
};

export default forumsFilterReducer;
