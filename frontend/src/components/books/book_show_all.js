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
      <div>
        <ul className="book-show-all-ul">
          {Object.values(books).map((book, i) => {
            return (
              <Link className="book-show-all-link" key={i} to={`/books/${book._id}`}>
               
                  <div className="book-show-all-item-div">
                    <img
                      src={`${book.imagePath}`}
                      className="book-show-all-cover-photo"
                    />
                    <div className="book-show-all-text">
                        <p className="book-show-all-title">{book.title}</p>
                        <p className="book-show-all-author">by {book.author}</p>
                    </div>
                  </div>
                
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BookShowAll;