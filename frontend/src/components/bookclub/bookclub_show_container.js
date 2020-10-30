import { connect } from 'react-redux'
import BookClubShow from './bookclub_show'
import { fetchBookClub } from '../../actions/bookclub_actions';

const mSTP = ({ entities }, { match }) => ({
    bookclubId: match.params.bookclubId,
    bookclub: entities.bookclubs[match.params.bookclubId]
});

const mDTP = dispatch => ({
    fetchBookClub: (id) => dispatch(fetchBookClub(id))
});

export default connect(mSTP, mDTP)(BookClubShow)