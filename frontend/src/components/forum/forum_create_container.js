import { connect } from 'react-redux'
import ForumCreate from './forum_create'
import {fetchFilteredBookClubForums, clearForumsFilter} from '../../actions/filters/forum_filter_actions';
import {createForum} from '../../util/forum_util'

const mSTP = state => ({
    forums: state.entities.forums,
    // bookclub: this. 
});

const mDTP = dispatch => ({
    clearForumsFilter: () => dispatch(clearForumsFilter()),
    createForum: (newForum) => createForum(newForum),
    fetchFilteredBookClubForums: (id) => dispatch(fetchFilteredBookClubForums(id)),
});

export default connect(mSTP, mDTP)(ForumCreate)