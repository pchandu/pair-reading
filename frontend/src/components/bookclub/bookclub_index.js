import React from 'react'
import { Link } from 'react-router-dom';

class BookClubIndex extends React.Component {

    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        this.props.clearBookclubsFilter();
        this.props.fetchFilteredBookclubs();
    }

    render() {
        const { bookclubs } = this.props;
        debugger
        return (
            <div className="bookclub-index-container">
                <ul className="bookclub-index-bookclubs">
                    {Object.values(bookclubs).map((bookclub, i) => (
                        <Link to={`/bookclubs/${bookclub._id}`}>
                            <li key={i}>{bookclub.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BookClubIndex