import { connect } from 'react-redux'
import { fetchFilteredUserBooks, clearBooksFilter, changeBooksFilter } from '../../actions/filters/book_filter_actions';
import BookFeed from './books_feed'
import {refSelector} from '../selectors/index_selectors'

const mSTP = ({session:{user}, entities}) => ({
    userId: user.id,
    user,
    books: refSelector(user.books,entities.books)
});

const mDTP = dispatch => ({
    clearBooksFilter: () => dispatch(clearBooksFilter()),
    changeBooksFilter: (filters) => dispatch(changeBooksFilter(filters)),
    fetchFilteredUserBooks: (userId) => dispatch(fetchFilteredUserBooks(userId))
});

export default connect(mSTP, mDTP)(BookFeed)