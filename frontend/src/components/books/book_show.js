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
        // this.props.fetchUsers(this.props.bookId);

    }

    toggleFollow(bookId) {
        // console.log(this.props.user)
        // debugger
      let elem = document.getElementById("book-show-follow-btn");
      if (elem.innerHTML === "Unfollow Book"){
        // console.log('we exists yes');
        

        elem.innerHTML = "Follow Book";
        // console.log(this.props.users);
        let currUser = this.props.currentUser;
        // console.log(currUser);
        // console.log(typeof currUser);

        // console.log(this.props.users)
        // console.log(typeof this.props.users);



        let joined = this.props.users;
        joined[this.props.currentUserId] = currUser;

        // console.log(joined);
        
        this.setState({ users: joined });

        // this.props.users.map((ele, idx)=> {
        //     if (ele === this.props.currentUserId){
        //         this.props.users.splice(idx, 1);
        //     }
        // })

      }
      else if (elem.innerHTML === "Follow Book") {
        elem.innerHTML = "Unfollow Book";
        // this.props.users.push(this.props.currentUserId);
        // let currUser = this.props.currentUser;
        // let currUserId = this.props.currentUserId;


        // let joined = this.props.users;
        // delete joined.currUserId;
        

      }

      this.props.userFollowBook({
        user: this.props.currentUserId,
        book: bookId,
      });

    //   console.log(this.props.users);
    //   console.log(this.props.currentUserId);

    };
    

    userFollow() {
       let checkArr = Object.values(this.props.users).map(user => user._id)
       if (checkArr.includes(this.props.currentUserId)) {
            // console.log('we exists yes');
            // elem.innerHTML = "Unfollow Book";
            return true;
       }
       else {
            // console.log("NaH BrO");
            // elem.innerHTML = "Follow Book";
            return false;

       }
    };

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
                        <button id="book-show-follow-btn" onClick={() => this.toggleFollow(this.props.books._id)}>{this.userFollow() ? "Unfollow Book" : "Follow Book"}</button>
                        
                    </div>
                   
                    
                </div>

                <div className="user-match-container">
                    <h2 className="book-show-user-matches-text">Here are some other users that are looking for a partner!</h2>
                    <ul className="user-matches">
                        {Object.values(this.props.users).map((user) => {
                            let idUser = user._id ? user._id : user.id;
                            return (
                                <Link to={`/users/${idUser}`} style={{ textDecoration: 'none' }} >
                                    <li key={idUser}className="matched-user">
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