import {connect} from 'react-redux';
import Profile from './profile';
import { fetchFilteredUserMatches, changeUserFilter, clearUserFilter } from '../../actions/filters/user_filter_actions';

const mSTP = ({entities:{users}, session: {user}}) => ({
    users: Object.values(users).filter(el => el._id !== user.id),
    user
})

const mDTP = (dispatch) => ({
    changeUserFilter: (filter,value) => dispatch(changeUserFilter(filter,value)),
    clearUserFilter: () => dispatch(clearUserFilter()),
    fetchFilteredUserMatches: (id) => dispatch(fetchFilteredUserMatches(id))
})

export default connect(mSTP,mDTP)(Profile);