import React from 'react'
import { Link } from 'react-router-dom'
import BooksContainer from './books_bookclub_container';

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
        // this.props.fetchFilteredBookClubBooks(this.props.bookclubId);
        this.props.fetchFilteredBookClubUsers(this.props.bookclubId);
    }

    render() {
        // debugger
        const { bookclub} = this.props;
        // const books = this.props.books.map((el, i) =>
        //     <Link to={`/books/${el._id}`}>
        //         <li key={i} className="bookclub-books-list-item">
        //             <h2>{el.title}</h2>
        //         </li>
        //     </Link>
        // )
        debugger
        const forums = this.props.forums.map((el, i) =>
            <Link key={i} to={`/forums/${el._id}`}>
                <li key={i} className="bookclub-forums-list-item">
                    <h2>{el.title}</h2>
                </li>
            </Link>
        )
        const users = this.props.users.map((el, i) =>
            <Link key={i} to={`/users/${el._id}`}>
                <li key={i} className="bookclub-users-list-item">
                    <h2>{el.username}</h2>
                </li>
            </Link>
        )
        return (
            <div className="bookclub-show-container">
                <h1 className="bookclub-header">BookClub - </h1>
                <h2 className="bookclub-title">{bookclub ? bookclub.title:""}</h2>
                <div className="bookclub-show-content-container">
                <div className="left-side-bookclub-show-container">
                    <h1 className="profile-label">Members</h1>
                    <div className="bookclub-users-container">
                    <ul className="bookclub-users-list">
                        {users}
                    </ul>
                    </div>
                </div>
                <div className="middle-side-bookclub-show-container">
                    <h1 className="profile-label">Forums</h1>
                    <ul className="bookclub-forums-list">
                        {forums}
                    </ul>
                </div>
                <div className="right-side-bookclub-show-container">
                    <h1 className="profile-label" >Books</h1>
                    <ul className="bookclub-books-list">
                        <BooksContainer match={this.props.match} owner="bookclub" />
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default BookClubShow