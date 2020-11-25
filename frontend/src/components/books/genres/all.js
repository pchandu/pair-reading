import React from 'react'
import {Link } from "react-router-dom"

class AllBooks extends React.Component {


    // historicalBooks: [],
    // fantasyBooks: [],
    // nonFictionBooks: [],

    
    render(){
        const {books} = this.props;
        let books2 = books["books"]
        // debugger
        return(
            <div className="all-book-show-outer-div">
                <h1>Historical</h1>
                <ul className="book-show-singular-ul">
                {books2.historicalBooks.map((book,i)=>{
                    if(book.description === undefined) debugger;
                    if(i > 4){ return null };
                    return(
                    <div 
                        onMouseEnter={() => this.props.showInfo(i,"hs")}
                        onMouseLeave={() => this.props.hideInfo(i,"hs")}
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
                        id={`text${i}hs`}>
                            <p className="book-show-all-title">{book.title}</p>
                            <p className="book-show-all-author">{book.author}</p>
                            <p>{book.description.slice(0,180)}...</p>
                        </div>
                    </div>
                    )
                })}
                </ul>
                <h1>Fantasy</h1>
                <ul className="book-show-singular-ul">
                {books2.fantasyBooks.map((book,i)=>{
                    if(i > 4){ return null };
                    return(
                    <div 
                        onMouseEnter={() => this.props.showInfo(i,"fs")}
                        onMouseLeave={() => this.props.hideInfo(i,"fs")}
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
                        id={`text${i}fs`}>
                            <p className="book-show-all-title">{book.title}</p>
                            <p className="book-show-all-author">{book.author}</p>
                            <p>{book.description.slice(0,180)}...</p>
                        </div>
                    </div>
                    )
                })}
                </ul>

                <h1>NonFiction</h1>
                <ul className="book-show-singular-ul">
                {books2.nonFictionBooks.map((book,i)=>{
                    if(i > 4){ return null };
                    return(
                    <div 
                        onMouseEnter={() => this.props.showInfo(i,"nf")}
                        onMouseLeave={() => this.props.hideInfo(i,"nf")}
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
                        id={`text${i}nf`}>
                            <p className="book-show-all-title">{book.title}</p>
                            <p className="book-show-all-author">{book.author}</p>
                            <p>{book.description.slice(0,180)}...</p>
                        </div>
                    </div>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default AllBooks