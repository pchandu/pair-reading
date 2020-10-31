import { connect } from 'react-redux'
import { fetchFilteredUserPosts, clearPostsFilter, changePostsFilter } from '../../actions/filters/post_filter_actions';
import PostFeed from '../profile/posts_feed'
import { refSelector } from '../selectors/index_selectors'

const mSTP = ({ entities: { users, posts } }, { match }) => {
    const user = users[match.params.userId];
    return {
        userId: match.params.userId,
        user: user,
        posts: refSelector(user ? user.posts : undefined, posts)
    }
};

const mDTP = dispatch => ({
    clearPostsFilter: () => dispatch(clearPostsFilter()),
    changePostsFilter: (filters) => dispatch(changePostsFilter(filters)),
    fetchFilteredUserPosts: (userId) => dispatch(fetchFilteredUserPosts(userId))
});

export default connect(mSTP, mDTP)(PostFeed)