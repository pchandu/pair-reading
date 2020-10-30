import React from 'react'
import { Link } from 'react-router-dom'

class BookClubShow extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.clearForumsFilter();
        this.props.clearBooksFilter();
        this.props.clearUsersFilter();
        this.props.fetchBookClub(this.props.bookclubId);
        this.props.fetchFilteredBookClubForums(this.props.bookclubId);
        this.props.fetchFilteredBookClubBooks(this.props.bookclubId);
        this.props.fetchFilteredBookClubUsers(this.props.bookclubId);
    }

    render() {
        // debugger
        const { bookclub} = this.props;
        const books = this.props.books.map((el, i) =>
            <Link to={`/books/${el._id}`}>
                <li key={i} className="bookclub-books-list-item">
                    <h2>{el.title}</h2>
                </li>
            </Link>
        )
        const forums = this.props.forums.map((el, i) =>
            <Link to={`/forums/${el._id}`}>
                <li key={i} className="bookclub-forums-list-item">
                    <h2>{el.title}</h2>
                </li>
            </Link>
        )
        const users = this.props.users.map((el, i) =>
            <Link to={`/users/${el._id}`}>
                <li key={i} className="bookclub-users-list-item">
                    <h2>{el.username}</h2>
                </li>
            </Link>
        )
        return (
            <div className="bookclub-show-container">
                <h1>BookClub - </h1>
                <h2>{bookclub ? bookclub.title:""}</h2>
                <h3>Books</h3>
                <ul className="bookclub-books-list">
                    {books}
                </ul>
                <h3>Forums</h3>
                <ul className="bookclub-forums-list">
                    {forums}
                </ul>
                <h3>Members</h3>
                <ul className="bookclub-users-list">
                    {users}
                </ul>
            </div>
        )
    }
}

export default BookClubShow