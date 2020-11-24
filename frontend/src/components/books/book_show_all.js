import React from "react";
import { Link } from "react-router-dom";

import HistoricalContainer from './genres/historical_fiction'
import FantasyContainer from './genres/fantasy_fiction'
import NonFictionContainer from './genres/non_fiction'
import AllBooksContainer  from './genres/all'

class BookShowAll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historicalBooks: [],
      fantasyBooks: [],
      nonFictionBooks: [],
      booksSet: false,
      whichTab: 0
    }
  }

  componentWillMount() {
    this.props.fetchAllBooks()
      .then(() => this.setBooks())
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
    this.setState({booksSet: true})
  }

  showInfo(bookNum,subject){
    let book = document.getElementById(`text${bookNum}${subject? subject : ''}`)
    book.classList.add("show")
    book.classList.remove("hidden")
  }

  hideInfo(bookNum, subject){
    let book = document.getElementById(`text${bookNum}${subject? subject: ''}`)
    book.classList.add("hidden")
    book.classList.remove("show")
  }

  handlePage(numPage){
    this.setState({whichTab: numPage})
  }

  render() {
    // if (!this.props.books) return null
    if (!this.props.books) return <div />;
    
    const { books } = this.props;
    const { whichTab } = this.state;

    let page;
    let header;

    if(whichTab === 1){
      page = <NonFictionContainer 
      hideInfo={this.hideInfo}
      showInfo={this.showInfo}
      books={this.state.nonFictionBooks}/>
      header = "Non-Fiction books"
    } else if(whichTab === 2){
      page = <HistoricalContainer 
      books={this.state.historicalBooks} 
      hideInfo={this.hideInfo}
      showInfo={this.showInfo}
      />
      header = "Historical books"
    } else if(whichTab === 3) {
      page = <FantasyContainer 
      books={this.state.fantasyBooks}
      hideInfo={this.hideInfo}
      showInfo={this.showInfo}
      />
      header = "Fantasy books"
    } else if(whichTab === 0){
      page = <AllBooksContainer 
      books={{books: this.state}}
      hideInfo={this.hideInfo}
      showInfo={this.showInfo}
      />
      header = "All books"
    } else {
      page = ''
    }

    return (
      <div className="outer-div-book-show-all">
        <h1 className="show-all-h1">{header}</h1>
        <div className="container-tabs-book-show-all">
          <p onClick={() => this.handlePage(0)}>All</p>
          <p onClick={() => this.handlePage(1)}>Non-Fiction</p>
          <p onClick={() => this.handlePage(2)}>Historical</p>
          <p onClick={() => this.handlePage(3)}>Fantasy</p>
        </div>
        <ul className="book-show-all-ul"> 
          {page}
        </ul>
      </div>
    );
  }
}

export default BookShowAll;