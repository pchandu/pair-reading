import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { removeAllUsers } from '../../actions/user_actions'
import { refreshLoggedInUserInfo } from '../../actions/session_actions'

const mSTP = (state) => {
    return({
        currentUser:state.session.user
    })
}

const mDTP = (dispatch) => {
    return({
        removeAllUsers: () => dispatch(removeAllUsers()),
        refreshUserInfo: (userId) => dispatch(refreshLoggedInUserInfo(userId))
    })
}

export default connect(mSTP,mDTP)(Dashboard);