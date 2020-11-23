import { connect } from 'react-redux';
import NewPost from './new_post';
import { composePost } from '../../actions/post_actions';


const mSTP = ({ session }) => ({
    userId: session.user.id
})

const mDTP = (dispatch) => ({
    composePost: (data) => dispatch(composePost(data)),
})

export default connect(mSTP, mDTP)(NewPost);