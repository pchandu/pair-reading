import React from 'react';
import { Link } from 'react-router-dom'


class BookShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
        }
        this.userFollow = this.userFollow.bind(this);
        this.toggleFollow = this.toggleFollow.bind(this);


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

    componentDidUpdate() {
    this.props.refreshUserInfo({ user: this.props.currentUser["id"] });


    }

    toggleFollow(bookId) {
 
      let elem = document.getElementById("book-show-follow-btn");
      if (elem.innerHTML === "Unfollow Book"){
        elem.innerHTML = "Follow Book";
        elem.style.backgroundColor = "limegreen";

      }
      else if (elem.innerHTML === "Follow Book") {
        elem.innerHTML = "Unfollow Book";
        elem.style.backgroundColor = "darkred";
      }

      this.props.userFollowBook({
        user: this.props.currentUserId,
        book: bookId,
      });
    }
    
    

    userFollow() {
    let checkbook = Object.values(this.props.currentUser.books).map((book) => book);
      if (checkbook.includes(this.props.books._id)) {
        return true;
    } else {
        return false;
    }

    };

    render() {
        if (!this.props.books) return null
        let bgButtonColor = this.userFollow() ? "darkred" : "limegreen";
        return (
            <div className="book-show-container">
                <div className="book-show-info-container">
                    <img src={this.props.books.imagePath} className="book-show-cover-photo"/>
                    <div className="book-show-details">
                        
                        <button id="book-show-follow-btn" onClick={() => this.toggleFollow(this.props.books._id)} style={{backgroundColor: bgButtonColor}}>{this.userFollow() ? "Unfollow Book" : "Follow Book"}</button>

                        <h1 className="book-show-title"> {this.props.books.title} </h1>
                        <h1 className="book-show-author"> by {this.props.books.author} </h1>
                        <p className="book-show-description"> {this.props.books.description} </p>
                        
                    </div>
                   
                    
                </div>

                <div className="user-match-container">
                    <h2 className="book-show-user-matches-text">Here are some other users that are looking for a partner!</h2>
                    <ul className="user-matches">
                        {Object.values(this.props.users).map((user) => {
                            // let idUser = user._id ? user._id : user.id;
                            // if (user._id === this.props.currentUserId){
                            //    user._id = {};
                            // }
                            return (
                                <Link to={`/users/${user._id}`} style={{ textDecoration: 'none' }} >
                                    <li key={user._id}className="matched-user">
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