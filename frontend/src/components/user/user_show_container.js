import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';


const mSTP = ({ entities }, { match }) => ({
    userId: match.params.userId,
    user: entities.users[match.params.userId],
})

const mDTP = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
})

export default connect(mSTP, mDTP)(UserShow);