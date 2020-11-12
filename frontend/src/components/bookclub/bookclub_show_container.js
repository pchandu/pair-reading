import { connect } from 'react-redux'
import BookClubShow from './bookclub_show'
import { fetchBookClub } from '../../actions/bookclub_actions';
import { fetchFilteredBookClubForums, clearForumsFilter, changeForumsFilter } from '../../actions/filters/forum_filter_actions';
import { clearBooksFilter, changeBooksFilter, fetchFilteredBookClubBooks } from '../../actions/filters/book_filter_actions';
import { clearUsersFilter, changeUsersFilter, fetchFilteredBookClubUsers } from '../../actions/filters/user_filter_actions';
import { refSelector, bookclubShowSelector } from '../selectors/index_selectors';

const mSTP = ({ entities }, { match }) => {
    debugger
    return {
    bookclubId: match.params.bookclubId,
    bookclub: entities.bookclubs[match.params.bookclubId],
    books: bookclubShowSelector(entities.bookclubs[match.params.bookclubId], entities.books,"books"),
    users: bookclubShowSelector(entities.bookclubs[match.params.bookclubId], entities.users,"users"),
    forums: bookclubShowSelector(entities.bookclubs[match.params.bookclubId], entities.forums,"forums"),
}};

const mDTP = dispatch => ({
    fetchBookClub: (id) => dispatch(fetchBookClub(id)),
    clearForumsFilter: () => dispatch(clearForumsFilter()),
    changeForumsFilter: (filter,value) => dispatch(changeForumsFilter(filter,value)),
    fetchFilteredBookClubForums: (id) => dispatch(fetchFilteredBookClubForums(id)),
    
    clearBooksFilter: () => dispatch(clearBooksFilter()),
    changeBooksFilter: (filter,value) => dispatch(changeBooksFilter(filter,value)),
    fetchFilteredBookClubBooks: (id) => dispatch(fetchFilteredBookClubBooks(id)),

    clearUsersFilter: () => dispatch(clearUsersFilter()),
    changeUsersFilter: (filter,value) => dispatch(changeUsersFilter(filter,value)),
    fetchFilteredBookClubUsers: (id) => dispatch(fetchFilteredBookClubUsers(id)),

});

export default connect(mSTP, mDTP)(BookClubShow)