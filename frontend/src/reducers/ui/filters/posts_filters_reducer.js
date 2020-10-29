import { UPDATE_POSTS_FILTER, CLEAR_POSTS_FILTER } from '../../../actions/filters/post_filter_actions';

const defaultFilters = Object.freeze({
    keywords: null
});

const postsFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_POSTS_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case CLEAR_POSTS_FILTER:
            return defaultFilters;
        default:
            return state;
    }
};

export default postsFilterReducer;
