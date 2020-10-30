import React from 'react'


class BookShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userIds: {},
            users: {},
            bookClubIds: {}, 
            bookClubs: {},
            forums: {}
        }

    }

    componentDidMount(){
        this.props.clearFilters();
        this.props.fetchBook(this.props.bookId);
        this.props.fetchUsers(this.props.bookId);
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
                    </div>
                    
                </div>
                
                <div className="user-match-container">
                    <h2 className="book-show-user-matches-text">Here are some other users that are looking for a partner! (these will be user show pages)</h2> 
                    <ul className="user-matches">
                        {Object.values(this.props.users).map((user) => {
                            return (
                                <li className="matched-user">{user.username}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}

export default BookShow