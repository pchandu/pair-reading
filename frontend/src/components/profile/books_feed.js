import React from 'react'
import {Link} from 'react-router-dom'

class BookFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.clearBooksFilter();
        this.props.fetchFilteredUserBooks(this.props.userId);
    }
    componentDidUpdate(ownProps) {
        if (ownProps.match && this.props.userId !== ownProps.match.params.userId) {
            this.props.fetchFilteredUserBooks(this.props.userId);
        }

    }

    render() {
        const books = this.props.books.map((el,i) =>
            <Link key={i} to={`/books/${el._id}`}>
            <li key={i} className="books-feed-list-item">
                <div><img className="books-feed-img" src={el.imagePath}/></div>
                <div><h1>{el.title}</h1>
                <h2>by {el.author}</h2></div>
            </li>
            </Link>
        )
        return(
            <div className="books-feed-container">
                <ul className="books-feed-list">
                    {books}
                </ul>
            </div>
        )
    }
}

export default BookFeed
