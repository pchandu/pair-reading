import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { resetEverything } from '../../actions/all_actions'
import { refreshLoggedInUserInfo } from '../../actions/session_actions'

const mSTP = (state) => {
    return({
        currentUser:state.session.user
    })
}

const mDTP = (dispatch) => {
    return({
        resetEverything: () => dispatch(resetEverything()),
        refreshUserInfo: (userId) => dispatch(refreshLoggedInUserInfo(userId))
    })
}

export default connect(mSTP,mDTP)(Dashboard);