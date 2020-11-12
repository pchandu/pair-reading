import { connect } from 'react-redux'
import { fetchFilteredBookClubBooks, clearBooksFilter, changeBooksFilter } from '../../actions/filters/book_filter_actions';
import BookFeed from '../profile/books_feed'
import { refSelector } from '../selectors/index_selectors'

const mSTP = ({ entities: { bookclubs, books } }, { match }) => {
    const bookclub = bookclubs[match.params.bookclubId];
    return {
        ownerId: match.params.bookclubId,
        bookclub: bookclub,
        books: refSelector(bookclub ? bookclub.books : undefined, books)
    }
};

const mDTP = dispatch => ({
    clearBooksFilter: () => dispatch(clearBooksFilter()),
    changeBooksFilter: (filters) => dispatch(changeBooksFilter(filters)),
    fetchFilteredOwnerBooks: (ownerId) => dispatch(fetchFilteredBookClubBooks(ownerId))
});

export default connect(mSTP, mDTP)(BookFeed)