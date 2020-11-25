import Dashboard from './dashboard';
import { resetEverything } from '../../actions/all_actions'
import { refreshLoggedInUserInfo } from '../../actions/session_actions'
import {connect} from 'react-redux';

const mSTP = (state) => {
    // debugger
    return({
        currentUser:state.session.user,
        meetings: state.session.user.meetings
    })
}

const mDTP = (dispatch) => {
    return({
        resetEverything: () => dispatch(resetEverything()),
        refreshUserInfo: (userId) => dispatch(refreshLoggedInUserInfo(userId))
    })
}

export default connect(mSTP,mDTP)(Dashboard);