import React from 'react'
import { Link } from 'react-router-dom'

class BookClubFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            updated: 0
        }

        this.deleteBookClub = this.deleteBookClub.bind(this)
    }

    componentDidMount() {
        this.props.clearBookClubsFilter();
        this.props.fetchFilteredUserBookClubs(this.props.userId);
    }
    // componentDidUpdate(ownProps) {
    //     debugger;
    //     if (ownProps.match && this.props.userId !== ownProps.match.params.userId) {
    //         this.props.fetchFilteredUserBookClubs(this.props.userId);
    //     }
    // }

    refreshComponentFromDashboard(){
        this.setState({updated: (this.state.updated += 1) })
    }

    deleteBookClub(bookClubTitle){
        return ( e =>{
            e.preventDefault();
            e.stopPropagation();
            if(window.confirm(`This will delete the Book Club named: ${bookClubTitle}`)){
                this.props.deleteBookClub({
                    title: bookClubTitle, 
                    creator: this.props.userId
                })
                    .then(this.props.fetchFilteredUserBookClubs(this.props.userId))
            }
        }).bind(this)


    }

    render() {
        const bookclubs = this.props.bookclubs.map((el, i) =>
                <Link key={i} to={`/bookclubs/${el._id}`} className="bookclubs-feed-list-item">       
                    <h2>{el.title}</h2>
                    <div>
                    {el.creator === this.props.userId ?

                    <button 
                    className="bookclubs-delete-button"
                    onClick={this.deleteBookClub(el.title)}
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