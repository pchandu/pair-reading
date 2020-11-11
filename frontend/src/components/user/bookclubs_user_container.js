import { connect } from 'react-redux'
import { fetchFilteredUserBookClubs, clearBookClubsFilter, changeBookClubsFilter } from '../../actions/filters/bookclub_filter_actions';
import BookClubFeed from '../profile/bookclubs_feed'
import { refSelector } from '../selectors/index_selectors'

const mSTP = ({ entities: { users, bookclubs } }, { match }) => {
    const user = users[match.params.userId];
    return {
        userId: match.params.userId,
        user: user,
        bookclubs: refSelector(user ? user.bookclubs : undefined, bookclubs)
    }
};

const mDTP = dispatch => ({
    clearBookClubsFilter: () => dispatch(clearBookClubsFilter()),
    changeBookClubsFilter: (filter, value) => dispatch(changeBookClubsFilter(filter, value)),
    fetchFilteredUserBookClubs: (userId) => dispatch(fetchFilteredUserBookClubs(userId))
});

export default connect(mSTP, mDTP)(BookClubFeed)