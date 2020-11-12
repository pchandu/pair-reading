import { connect } from 'react-redux'
import { fetchAllBooks } from '../../actions/book_actions';
import { updateUser } from '../../util/session_api_util';
import ProfilePreferences from './preferences';

const mSTP = state => ({
    books: state.entities.books,
    currentUser: state.session.user.id
});

const mDTP = dispatch => ({
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    updateUser: (updatedUser) => updateUser(updatedUser)
});

export default connect(mSTP,mDTP)(ProfilePreferences)