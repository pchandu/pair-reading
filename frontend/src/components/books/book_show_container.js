import { connect } from 'react-redux'
import BookShow from './book_show'
import { fetchBook, removeAllBooks } from '../../actions/book_actions'
import {clearUsersFilter, fetchFilteredBookUsers} from '../../actions/filters/user_filter_actions'
import { removeAllUsers} from '../../actions/user_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        books: state.entities.books[ownProps.match.params.bookId],
        bookId: ownProps.match.params.bookId,
        currentUserId: state.session.user.id,
        currentUserBook : state.session.user.books,
        users: state.entities.users,
    }
    // match allows us to look in the url and extract the wild card
};

const mDTP = dispatch => ({
    fetchBook: (bookId) => dispatch(fetchBook(bookId)), 
    fetchUsers: (bookId) => dispatch(fetchFilteredBookUsers(bookId)),
    clearFilters: () => dispatch(clearUsersFilter()),
    removeAllBooks: () => dispatch(removeAllBooks()),
    removeAllUsers: () => dispatch(removeAllUsers())
});

export default connect(mSTP,mDTP)(BookShow)