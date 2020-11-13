import { connect } from 'react-redux'
import ForumCreate from './forum_create'
import {clearForumsFilter} from '../../actions/filters/forum_filter_actions';
import {createForum} from '../../util/forum_util'

const mSTP = state => ({
    forums: state.entities.forums
});

const mDTP = dispatch => ({
    clearForumsFilter: () => dispatch(clearForumsFilter()),
    createForum: (newForum) => createForum(newForum)
});

export default connect(mSTP, mDTP)(ForumCreate)