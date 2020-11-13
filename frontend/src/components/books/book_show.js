import React from 'react';
import { Link } from 'react-router-dom'


class BookShow extends React.Component {

    constructor(props) {
        super(props)
        this.userFollow = this.userFollow.bind(this);

    }

    componentDidMount(){
        this.props.clearFilters();
        this.props.fetchBook(this.props.bookId);
        this.props.fetchUsers(this.props.bookId);
    }

    componentWillUnmount(){
        this.props.removeAllBooks();
        this.props.removeAllUsers();
    }

    userFollow() {
       let checkArr = Object.values(this.props.users).map(user => user._id);
       if (checkArr.includes(this.props.currentUserId)) {
            console.log('we exists yes')
       }
       else {
            console.log("NaH BrO");

       }
    }

    render() {
        if (!this.props.books) return null

        return (
            <div className="book-show-container">
                <div className="book-show-info-container">
                    <img src={this.props.books.imagePath} className="book-show-cover-photo"/>
                    <div className="book-show-details">
                        <h1 className="book-show-title"> {this.props.books.title} </h1>
                        <h1 className="book-show-author"> by {this.props.books.author} </h1>
                        <p className="book-show-description"> {this.props.books.description} </p>
                        <button className="book-show-follow-btn" onClick={this.userFollow}>{this.props.currentUserId}</button>
                        
                        

                    </div>
                   
                    
                </div>

                <div className="user-match-container">
                    <h2 className="book-show-user-matches-text">Here are some other users that are looking for a partner! (these will be user show pages)</h2>
                    <ul className="user-matches">
                        {Object.values(this.props.users).map((user) => {
                            return (
                                <Link to={`/users/${user._id}`} style={{ textDecoration: 'none' }} >
                                    <li key={user._id }className="matched-user">
                                        <button>{user.username}</button> 
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>  
            </div>
        )
    }

}

export default BookShow