import React from "react";
import { Link } from "react-router-dom";

class BookShowAll extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  render() {
    // if (!this.props.books) return null
    if (!this.props.books) return <div />;
    const { books } = this.props;

    return (
        <div className="book-show-all-div">
        <div className="book-show-all-ul">
            {Object.values(books).map((book, i) => {
            return (
                <div className="book-show-all-item" key={i}>
                <img
                    src={`${book.imagePath}`}
                    className="book-show-all-cover-photo"
                />
                <div>
                    <h1 className="book-show-all-title">{book.title}</h1>
                    <h2 className="book-show-all-author">by {book.author}</h2>
                </div>
                </div>
            );
            })}
        </div>
        </div>
    );
  }
}

export default BookShowAll;