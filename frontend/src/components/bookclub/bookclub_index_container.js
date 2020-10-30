import { connect } from 'react-redux'
import { fetchAllBookClubs } from '../../actions/bookclub_actions';
import BookClubIndex from './bookclub_index'
import { fetchFilteredBookclubs, clearBookclubsFilter, changeBookclubsFilter } from '../../actions/filters/bookclub_filter_actions';

const mSTP = state => ({
    bookclubs: state.entities.bookclubs
});

const mDTP = dispatch => ({
    clearBookclubsFilter: () => dispatch(clearBookclubsFilter ()),
    changeBookclubsFilter: (filter, value) => dispatch(changeBookclubsFilter(filter, value)),
    fetchFilteredBookclubs: () => dispatch(fetchFilteredBookclubs ()),
});

export default connect(mSTP, mDTP)(BookClubIndex)