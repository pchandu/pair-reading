import {connect} from 'react-redux';
import Profile from './profile';
import { fetchFilteredUserMatches, changeUsersFilter, clearUsersFilter } from '../../actions/filters/user_filter_actions';

const mSTP = ({session: {user}}) => ({
    user
})

const mDTP = (dispatch) => ({
    changeUsersFilter: (filter,value) => dispatch(changeUsersFilter(filter,value)),
    clearUsersFilter: () => dispatch(clearUsersFilter()),
    fetchFilteredUserMatches: (id) => dispatch(fetchFilteredUserMatches(id))
})

export default connect(mSTP,mDTP)(Profile);