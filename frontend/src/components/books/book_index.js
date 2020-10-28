import React from 'react'


class BookIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: []
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(book) {
        let bookList = this.state.books
        this.setState({
            books: bookList.push(book)
        })
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
                        <a onClick={()=> this.handleClick(book)}>
                        <img src={`${book.imagePath}`} className="book-index-cover-photo" /> 
                        </a>
                        <input type="checkbox" id={`${book.title}`} name={`${book.title}`} className="book-checkbox"/>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default BookIndex