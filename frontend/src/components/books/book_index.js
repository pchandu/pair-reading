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
            <ul className="browse-container">
                {Object.values(books).map((book, i) => {
                    return (
                    <li className="book-index-item" key={i}>
                        <p>{book.title}</p>
                        {/* <a href={`#/books/${book.id}`}> */}
                        <img src={`${book.imagePath}`}
                        className="book-index-cover-photo" />
                        {/* </a> */}
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default BookIndex