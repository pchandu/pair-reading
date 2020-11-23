import { connect } from 'react-redux'
import { 
    fetchFilteredUserBookMatches, 
    clearUsersFilter, 
    changeUsersFilter } from '../../actions/filters/user_filter_actions';
import {fetchFilteredUserBookClubs} from '../../actions/filters/bookclub_filter_actions'
import MatchFeed from './matches_feed'
import { makeBookClub } from '../../util/bookclub_util';

const mSTP = ({ session: { user }, entities:{users,books} }) => ({
    userId: user.id,
    user,
    matches: Object.values(users).filter(el => el._id !== user.id),
    books: user.books,
    followedBooks: books

});

const mDTP = dispatch => ({
    clearUsersFilter: () => dispatch(clearUsersFilter()),
    changeUsersFilter: (filters) => dispatch(changeUsersFilter(filters)),
    fetchFilteredUserBookMatches: (userId) => dispatch(fetchFilteredUserBookMatches(userId)),
    makeBookClub: bookClubData => makeBookClub(bookClubData),
    fetchFilteredUserBookClubs: (userId) => dispatch(fetchFilteredUserBookClubs(userId))
});

export default connect(mSTP, mDTP)(MatchFeed)