import { connect } from 'react-redux'
import { fetchFilteredUserMatches, clearUsersFilter, changeUsersFilter } from '../../actions/filters/user_filter_actions';
import MatchFeed from './matches_feed'
import { refSelector } from '../selectors/index_selectors'

const mSTP = ({ session: { user }, entities:{users} }) => ({
    userId: user.id,
    user,
    matches: Object.values(users).filter(el => el._id !== user.id)
});

const mDTP = dispatch => ({
    clearUsersFilter: () => dispatch(clearUsersFilter()),
    changeUsersFilter: (filters) => dispatch(changeUsersFilter(filters)),
    fetchFilteredUserMatches: (userId) => dispatch(fetchFilteredUserMatches(userId))
});

export default connect(mSTP, mDTP)(MatchFeed)