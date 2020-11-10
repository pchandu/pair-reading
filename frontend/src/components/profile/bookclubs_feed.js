import React from 'react'
import { Link } from 'react-router-dom'

class BookClubFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.clearBookClubsFilter();
        this.props.fetchFilteredUserBookClubs(this.props.userId);
    }
    componentDidUpdate(ownProps) {
        if (ownProps.match && this.props.userId !== ownProps.match.params.userId) {
            this.props.fetchFilteredUserBookClubs(this.props.userId);
        }

    }

    render() {
        const bookclubs = this.props.bookclubs.map((el, i) =>
            <Link key={i} to={`/bookclubs/${el._id}`}>
                <li key={i} className="bookclubs-feed-list-item">
                    <h2>{el.title}</h2>
                </li>
            </Link>
        )
        return (
            <div className="bookclubs-feed-container">
                <ul className="bookclubs-feed-list">
                    {bookclubs}
                </ul>
            </div>
        )
    }
}

export default BookClubFeed