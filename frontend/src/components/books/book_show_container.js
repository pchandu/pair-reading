import { connect } from 'react-redux'
import BookShow from './book_show'
import {fetchBook} from '../../actions/book_actions'
import {clearUserFilter, fetchFilteredBookUsers} from '../../actions/filters/user_filter_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        books: state.entities.books[ownProps.match.params.bookId],
        bookId: ownProps.match.params.bookId,
        currentUserId: state.session.user.id,
        users: state.entities.users
    }
    // match allows us to look in the url and extract the wild card
};

const mDTP = dispatch => ({
    fetchBook: (bookId) => dispatch(fetchBook(bookId)), 
    fetchUsers: (bookId) => dispatch(fetchFilteredBookUsers(bookId)),
    clearFilters: () => dispatch(clearUserFilter())
});

export default connect(mSTP,mDTP)(BookShow)