import React from 'react'
import { Link } from 'react-router-dom'
import ForumCreate from '../forum/forum_create_container';
import BooksContainer from './books_bookclub_container';
// import { Redirect } from 'react-router-dom'

class BookClubShow extends React.Component {

    constructor(props) {
        super(props)

        this.deleteBookClub = this.deleteBookClub.bind(this)
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

    deleteBookClub(e){
        e.preventDefault();

        if(window.confirm("This will delete your bookclub, Do you really want to?")){
            this.props.deleteBookClub({
                title: this.props.bookclub.title, 
                creator: this.props.userId
            }).then( this.props.history.push("/dashboard") )
        }
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
        const forums = this.props.forums.map((el, i) =>
            <Link key={i} to={`/forums/${el._id}`} className="bookclub-forums-list-link">
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
        let deleteButton;
        if(this.props.bookclub){
        deleteButton = this.props.bookclub.creator === this.props.userId ? 
        <button 
        className="bookclub-show-delete-button btn btn-info" 
        onClick={this.deleteBookClub}
        >Delete BookClub</button> 
        : ''}
        
        return (
            <div className="bookclub-show-container">
                <h1 className="bookclub-header">BookClub -
                <h2 className="bookclub-title">{bookclub ? bookclub.title:""}</h2>
                {deleteButton}
                </h1>
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
                        <h1 className="profile-label">
                            Forums
                            <ForumCreate bookclubId={this.props.bookclubId}/>
                        </h1>     
                    <div className="bookclub-forums-container">
                        <ul className="bookclub-forums-list">
                            {forums}
                        </ul>
                    </div>
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