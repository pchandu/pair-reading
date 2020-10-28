import { connect } from 'react-redux'
import { fetchAllBookClubs } from '../../actions/bookclub_actions';
import BookClubIndex from './bookclub_index'

const mSTP = state => ({
    bookclubs: state.entities.bookclubs
});

const mDTP = dispatch => ({
    fetchAllBookClubs: () => dispatch(fetchAllBookClubs())
});

export default connect(mSTP, mDTP)(BookClubIndex)