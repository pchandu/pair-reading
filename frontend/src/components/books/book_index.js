import React from 'react'


class BookIndex extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllBooks();
    }

    render() {
        // if (!this.props.books) return null
        if (!this.props.books) return <div />
        const {books} = this.props;

        return (
            <ul className="books-ul">
                {Object.values(books).map((book, i) => {
                    return (
                    <li className="book-index-item" key={i}>
                        {/* <a href={`#/books/${book.id}`}> */}
                        <img src={`${book.imagePath}`} className="book-index-cover-photo"/> 
                        <input type="checkbox" id={`${book.title}`} name={`${book.title}`} className="book-checkbox"/>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default BookIndex