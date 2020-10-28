import Onboarding from './onboarding'
import { connect } from 'react-redux'
import { fetchAllBooks } from '../../actions/book_actions';
import { updateUser } from '../../util/session_api_util';

const mSTP = state => ({
    books: state.entities.books,
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    updateUser: (updatedUser) => dispatch(updateUser(updatedUser))
});

export default connect(mSTP,mDTP)(Onboarding)