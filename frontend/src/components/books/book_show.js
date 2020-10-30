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
                        <div>
                            {Object.values(this.props.users).map((user) => {
                                return (
                                    <div className="user-match-container">
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BookShow