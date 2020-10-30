import {connect} from 'react-redux';
import Profile from './profile';

const mSTP = ({session: {user}}) => ({
    user
})

const mDTP = (dispatch) => {
    return({})
}

export default connect(mSTP,mDTP)(Profile);