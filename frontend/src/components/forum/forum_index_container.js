import { connect } from 'react-redux'
import { fetchAllForums } from '../../actions/forum_actions';
import ForumIndex from './forum_index'

const mSTP = state => ({
    forums: state.entities.forums
});

const mDTP = dispatch => ({
    fetchAllForums: () => dispatch(fetchAllForums())
});

export default connect(mSTP, mDTP)(ForumIndex)