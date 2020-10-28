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
            <div className="browse-container">
                {Object.values(books).map((book, i) => {
                    return (
                    <div className="book-index-container">
                        <p>RAWRRRRRRRR</p>
                        {/* <a href={`#/books/${book.id}`}> */}
                        {/* <img src={book.imagePath} className="book-index-cover-photo" /> */}
                        {/* </a> */}
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default BookIndex