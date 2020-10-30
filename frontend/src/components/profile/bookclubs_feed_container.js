import { connect } from 'react-redux'
import { fetchFilteredUserBookClubs, clearBookClubsFilter, changeBookClubsFilter } from '../../actions/filters/bookclub_filter_actions';
import BookClubFeed from './bookclubs_feed'
import { refSelector } from '../selectors/index_selectors'

const mSTP = ({ session: { user }, entities }) => ({
    userId: user.id,
    user,
    bookclubs: refSelector(user.bookclubs, entities.bookclubs)
});

const mDTP = dispatch => ({
    clearBookClubsFilter: () => dispatch(clearBookClubsFilter()),
    changeBookClubsFilter: (filters) => dispatch(changeBookClubsFilter(filters)),
    fetchFilteredUserBookClubs: (userId) => dispatch(fetchFilteredUserBookClubs(userId))
});

export default connect(mSTP, mDTP)(BookClubFeed)