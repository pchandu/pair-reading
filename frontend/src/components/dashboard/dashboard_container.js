import {connect} from 'react-redux';
import Dashboard from './dashboard';
import { removeAllUsers } from '../../actions/user_actions'

const mSTP = (state) => {
    return({})
}

const mDTP = (dispatch) => {
    return({
        removeAllUsers: () => dispatch(removeAllUsers())
    })
}

export default connect(mSTP,mDTP)(Dashboard);