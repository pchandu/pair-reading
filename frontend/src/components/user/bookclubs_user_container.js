import { connect } from 'react-redux'
import { fetchFilteredUserBookClubs, clearBookClubsFilter, changeBookClubsFilter } from '../../actions/filters/bookclub_filter_actions';
import BookClubFeed from '../profile/bookclubs_feed'
import { refSelector } from '../selectors/index_selectors'
import { deleteBookClub } from '../../util/bookclub_util'

const mSTP = ({ entities: { users, bookclubs }, session }, { match }, ) => {
    const user = users[match.params.userId];
    return {
        userId1: match.params.userId,
        userId: session.user.id,
        user: user,
        bookclubs: refSelector(user ? user.bookclubs : undefined, bookclubs)
    }
};

const mDTP = dispatch => ({
    clearBookClubsFilter: () => dispatch(clearBookClubsFilter()),
    changeBookClubsFilter: (filter, value) => dispatch(changeBookClubsFilter(filter, value)),
    fetchFilteredUserBookClubs: (userId1) => dispatch(fetchFilteredUserBookClubs(userId1)),
    deleteBookClub: (bookClubData) => deleteBookClub(bookClubData)
});

export default connect(mSTP, mDTP)(BookClubFeed)