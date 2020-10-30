import { connect } from 'react-redux'
import BookShow from './book_show'
import {fetchBook} from '../../actions/book_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        books: state.entities.books[ownProps.match.params.bookId],
        bookId: ownProps.match.params.bookId,
    }
    // match allows us to look in the url and extract the wild card
};

const mDTP = dispatch => ({
    fetchBook: (bookId) => dispatch(fetchBook(bookId))
});

export default connect(mSTP,mDTP)(BookShow)