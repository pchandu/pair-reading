import { connect } from 'react-redux'
// import { fetchAllBookClubs } from '../../actions/bookclub_actions';
import BookClubIndex from './bookclub_index'
import { fetchFilteredBookClubs, clearBookClubsFilter, changeBookClubsFilter } from '../../actions/filters/bookclub_filter_actions';

const mSTP = state => ({
    bookclubs: state.entities.bookclubs
});

const mDTP = dispatch => ({
    clearBookClubsFilter: () => dispatch(clearBookClubsFilter ()),
    changeBookClubsFilter: (filter, value) => dispatch(changeBookClubsFilter(filter, value)),
    fetchFilteredBookClubs: () => dispatch(fetchFilteredBookClubs ()),
});

export default connect(mSTP, mDTP)(BookClubIndex)