import { connect } from 'react-redux'
import { fetchAllPosts } from '../../actions/post_actions';
import postIndex from './post_index'

const mSTP = state => ({
    posts: state.entities.posts
});

const mDTP = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mSTP, mDTP)(postIndex)