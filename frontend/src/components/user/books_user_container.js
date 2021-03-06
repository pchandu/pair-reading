import { connect } from 'react-redux'
import { fetchFilteredUserBooks, clearBooksFilter, changeBooksFilter } from '../../actions/filters/book_filter_actions';
import BookFeed from '../profile/books_feed'
import {refSelector} from '../selectors/index_selectors'

const mSTP = ({ entities: { users, books } }, { match }) => {
    const user = users[match.params.userId];
    return{
    ownerId: match.params.userId,
    user: user,
    books: refSelector(user?user.books:undefined, books)
}};

const mDTP = dispatch => ({
    clearBooksFilter: () => dispatch(clearBooksFilter()),
    changeBooksFilter: (filters) => dispatch(changeBooksFilter(filters)),
    fetchFilteredOwnerBooks: (ownerId) => dispatch(fetchFilteredUserBooks(ownerId))
});

export default connect(mSTP, mDTP)(BookFeed)