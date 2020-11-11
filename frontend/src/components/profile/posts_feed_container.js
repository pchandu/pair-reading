import { connect } from 'react-redux'
import { fetchFilteredUserPosts, clearPostsFilter, changePostsFilter } from '../../actions/filters/post_filter_actions';
import PostFeed from './posts_feed'
import { refSelector } from '../selectors/index_selectors'

const mSTP = ({ session: { user }, entities }) => ({
    userId: user.id,
    user,
    posts: refSelector(user.posts, entities.posts)
});

const mDTP = dispatch => ({
    clearPostsFilter: () => dispatch(clearPostsFilter()),
    changePostsFilter: (filter, value) => dispatch(changePostsFilter(filter, value)),
    fetchFilteredUserPosts: (userId) => dispatch(fetchFilteredUserPosts(userId))
});

export default connect(mSTP, mDTP)(PostFeed)