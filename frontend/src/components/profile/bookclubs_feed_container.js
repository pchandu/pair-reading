import { connect } from 'react-redux'
import { 
    fetchFilteredUserBookClubs, 
    clearBookClubsFilter, 
    changeBookClubsFilter } from '../../actions/filters/bookclub_filter_actions';
import BookClubFeed from './bookclubs_feed'
import { refSelector } from '../selectors/index_selectors'
import { deleteBookClub } from '../../util/bookclub_util';

const mSTP = ({ session: { user }, entities }) => ({
    userId: user.id,
    user,
    bookclubs: refSelector(user ? user.bookclubs : undefined, entities.bookclubs)
});

const mDTP = dispatch => ({
    clearBookClubsFilter: () => dispatch(clearBookClubsFilter()),
    changeBookClubsFilter: (filters) => dispatch(changeBookClubsFilter(filters)),
    fetchFilteredUserBookClubs: (userId) => dispatch(fetchFilteredUserBookClubs(userId)),
    deleteBookClub: (bookClubData) => deleteBookClub(bookClubData)
});

export default connect(mSTP, mDTP)(BookClubFeed)