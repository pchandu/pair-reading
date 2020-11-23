import React from "react";
import { Link } from "react-router-dom";

class BookShowAll extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  showInfo(bookNum){
    let book = document.getElementById(`text${bookNum}`)
    book.classList.add("show")
    book.classList.remove("hidden")
  }

  hideInfo(bookNum){
    let book = document.getElementById(`text${bookNum}`)
    book.classList.add("hidden")
    book.classList.remove("show")
  }

  render() {
    // if (!this.props.books) return null
    if (!this.props.books) return <div />;
    const { books } = this.props;

    return (
      <div className="outer-div-book-show-all">
        <h1 className="show-all-h1">List of all books</h1>
        <ul className="book-show-all-ul">
          {Object.values(books).map((book, i) => {
            return (
                <div 
                
                onMouseEnter={() => this.showInfo(i)}
                onMouseLeave={() => this.hideInfo(i)}
                className="container-for-book-show-item">
                  <Link className="book-show-all-link" 
                  key={i} 
                  to={`/books/${book._id}`}
                  >
                    <img
                      src={`${book.imagePath}`}
                      className="book-show-all-cover-photo"
                    />
                  </Link>
                  <div className={`book-show-all-text`}
                  id={`text${i}`}>
                      <p className="book-show-all-title">{book.title}</p>
                      <p className="book-show-all-author">{book.author}</p>
                      <p>{book.description.slice(0,180)}...
                        {/* {book.description.length > 180 ? 
                        <button onClick={}>more</button>
                        : ''} */}
                      </p>
                  </div>

               </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BookShowAll;