import BookShowAll from './book_show_all'
import { fetchAllBooks } from "../../actions/book_actions";
import { connect } from "react-redux";

const mSTP = (state) => ({
  books: state.entities.books,
});

const mDTP = dispatch => ({
    fetchAllBooks: () => dispatch(fetchAllBooks())
});

export default connect(mSTP, mDTP)(BookShowAll);

