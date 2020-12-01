import { connect } from 'react-redux'
import BookClubShow from './bookclub_show'
import { fetchBookClub } from '../../actions/bookclub_actions';
import { fetchFilteredBookClubForums, clearForumsFilter, changeForumsFilter } from '../../actions/filters/forum_filter_actions';
import { clearBooksFilter, changeBooksFilter, fetchFilteredBookClubBooks } from '../../actions/filters/book_filter_actions';
import { clearUsersFilter, changeUsersFilter, fetchFilteredBookClubUsers } from '../../actions/filters/user_filter_actions';
import { bookclubShowSelector } from '../selectors/index_selectors';
import { deleteBookClub, inviteToBookClub, leaveBookClub } from '../../util/bookclub_util'

const mSTP = ({ entities, session }, { match }) => {
    // debugger
    return {
    userId: session.user.id,
    username: session.user.username,
    bookclubId: match.params.bookclubId,
    bookclub: entities.bookclubs[match.params.bookclubId],
    books: bookclubShowSelector(entities.bookclubs[match.params.bookclubId], entities.books,"books"),
    users: bookclubShowSelector(entities.bookclubs[match.params.bookclubId], entities.users,"users"),
    forums: Object.values(entities.forums),
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

    deleteBookClub: (bookClubData) => deleteBookClub(bookClubData),
    inviteToBookClub: (invite) => inviteToBookClub(invite),
    leaveBookClub: (bookClubData) => leaveBookClub(bookClubData)

});

export default connect(mSTP, mDTP)(BookClubShow)