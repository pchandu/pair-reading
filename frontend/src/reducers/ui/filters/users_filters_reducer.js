import { UPDATE_USERS_FILTER, CLEAR_USERS_FILTER } from '../../../actions/filters/user_filter_actions';

const defaultFilters = Object.freeze({
    keywords: null,
});

const usersFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_USERS_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case CLEAR_USERS_FILTER:
            return defaultFilters;
        default:
            return state;
    }
};

export default usersFilterReducer;
