import React from "react";
import { Link } from "react-router-dom";

import HistoricalContainer from './genres/historical_fiction'
import FantasyContainer from './genres/fantasy_fiction'
import NonFictionContainer from './genres/non_fiction'

class BookShowAll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historicalBooks: [],
      fantasyBooks: [],
      nonFictionBooks: [],
      whichTab: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  setBooks(){

    Object.values(this.props.books).forEach( book => {
      if(book.genre === "Fantasy-Fiction"){
        this.state.fantasyBooks.push(book)
      } else if ( book.genre === "Non-Fiction"){
        this.state.nonFictionBooks.push(book)
      } else {
        this.state.historicalBooks.push(book)
      }
    })

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

  handlePage(numPage){
    this.setState({whichTab: numPage})
  }

  render() {
    // if (!this.props.books) return null
    if (!this.props.books) return <div />;
    else{
      this.setBooks();
    }
    const { books } = this.props;
    const { whichTab } = this.state;

    let page;

    if(whichTab === 1){
      page = <NonFictionContainer books={this.state.nonFictionBooks}/>
    } else if(whichTab === 2){
      page = <HistoricalContainer books={this.state.historicalBooks}/>
    } else if(whichTab === 3) {
      page = <FantasyContainer books={this.state.fantasyBooks}/>
    } else{
      page = ''
    }

    return (
      <div className="outer-div-book-show-all">
        <h1 className="show-all-h1">List of all books</h1>
        <div className="container-tabs-book-show-all">
          <p onClick={() => this.handlePage(0)}>All</p>
          <p onClick={() => this.handlePage(1)}>Non-Fiction</p>
          <p onClick={() => this.handlePage(2)}>Historical</p>
          <p onClick={() => this.handlePage(3)}>Fantasy</p>
        </div>
        <ul className="book-show-all-ul">
          
          {this.state.whichTab === 0 ? Object.values(books).map((book, i) => {
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
                      <p>{book.description.slice(0,180)}...</p>
                  </div>
               </div>
            );
          }): page}
        </ul>
      </div>
    );
  }
}

export default BookShowAll;