import { connect } from 'react-redux'
import { fetchFilteredUserMatches, clearUsersFilter, changeUsersFilter } from '../../actions/filters/user_filter_actions';
import MatchFeed from '../profile/matches_feed'

const mSTP = ({ entities: { users } }, { match }) => {
    // debugger
    return {
    userId: match.params.userId,
    user: users[match.params.userId],
    matches: Object.values(users).filter(el => el._id !== match.params.userId)
}};

const mDTP = dispatch => ({
    clearUsersFilter: () => dispatch(clearUsersFilter()),
    changeUsersFilter: (filters) => dispatch(changeUsersFilter(filters)),
    fetchFilteredUserMatches: (userId) => dispatch(fetchFilteredUserMatches(userId))
});

export default connect(mSTP, mDTP)(MatchFeed)