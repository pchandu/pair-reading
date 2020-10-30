import { connect } from 'react-redux'
import ForumIndex from './forum_index'
import { fetchFilteredForums, clearForumsFilter, changeForumsFilter } from '../../actions/filters/forum_filter_actions';

const mSTP = state => ({
    forums: state.entities.forums
});

const mDTP = dispatch => ({
    clearForumsFilter: () => dispatch(clearForumsFilter()),
    changeForumsFilter: (filter, value) => dispatch(changeForumsFilter (filter, value)),
    fetchFilteredForums: () => dispatch(fetchFilteredForums())
});

export default connect(mSTP, mDTP)(ForumIndex)