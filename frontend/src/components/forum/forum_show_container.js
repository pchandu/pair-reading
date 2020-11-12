import { connect } from 'react-redux'
import ForumShow from './forum_show'
import { fetchFilteredForumPosts, clearPostsFilter, changePostsFilter, fetchFilteredUserPosts } from '../../actions/filters/post_filter_actions';

const mSTP = ({entities},{match}) => ({
    forumId: match.params.forumId,
    posts: entities.posts,
    forum: entities.forums[match.params.forumId]
});

const mDTP = dispatch => ({
    clearPostsFilter: () => dispatch(clearPostsFilter()),
    changePostsFilter: (filter, value) => dispatch(changePostsFilter(filter, value)),
    fetchFilteredForumPosts: (forumId) => dispatch(fetchFilteredForumPosts(forumId))
});

export default connect(mSTP, mDTP)(ForumShow)