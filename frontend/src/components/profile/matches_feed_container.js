import { connect } from 'react-redux'
import { fetchFilteredUserBookMatches, clearUsersFilter, changeUsersFilter } from '../../actions/filters/user_filter_actions';
import MatchFeed from './matches_feed'
import { refSelector } from '../selectors/index_selectors'
import { makeBookClub } from '../../util/bookclub_util';

const mSTP = ({ session: { user }, entities:{users} }) => ({
    userId: user.id,
    user,
    matches: Object.values(users).filter(el => el._id !== user.id)
});

const mDTP = dispatch => ({
    clearUsersFilter: () => dispatch(clearUsersFilter()),
    changeUsersFilter: (filters) => dispatch(changeUsersFilter(filters)),
    fetchFilteredUserBookMatches: (userId) => dispatch(fetchFilteredUserBookMatches(userId)),
    makeBookClub: bookClubData => makeBookClub(bookClubData)
});

export default connect(mSTP, mDTP)(MatchFeed)