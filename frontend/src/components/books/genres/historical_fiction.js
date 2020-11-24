import React from 'react'
import {Link } from "react-router-dom"

class HistoricalFiction extends React.Component {

    render(){
        const {books} = this.props;
        return(
            <>
            {Object.values(books).map((book, i) => {
                return (
                    <div 
                    onMouseEnter={() => this.props.showInfo(i)}
                    onMouseLeave={() => this.props.hideInfo(i)}
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
            })}
            </>
        )
    }
}

export default HistoricalFiction;