import React from 'react'
import { Link } from 'react-router-dom'

class BookClubFeed extends React.Component {

    constructor(props) {
        super(props)

        this.deleteBookClub = this.deleteBookClub.bind(this)
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

    deleteBookClub(bookClubId){

    }

    render() {
        const bookclubs = this.props.bookclubs.map((el, i) =>
                <Link key={i} to={`/bookclubs/${el._id}`} className="bookclubs-feed-list-item">       
                    <h2>{el.title}</h2>
                    <div>
                    {el.creator === this.props.userId ?

                    <button 
                    className="bookclubs-delete-button"
                    onClick={() => this.deleteBookClub(el._id)}
                    >
                        DEL
                    </button> 
                    : ''}

                    Members: ( {el.users.length} ) 
                    </div>
                </Link>
        )
        return (
            <ul className="bookclubs-feed-list">
                    {bookclubs}
            </ul>
        )
    }
}

export default BookClubFeed