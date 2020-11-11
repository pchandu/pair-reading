import React from 'react'
import { Link } from 'react-router-dom'
import MakeBookClubModal from './bookclubs/make_bookclub';

class MatchFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookClubModal: false
        }

        this.showBookClubModal = this.showBookClubModal.bind(this)
    }

    componentDidMount() {
        this.props.clearUsersFilter();
        this.props.fetchFilteredUserBookMatches(this.props.userId);
    }
    componentDidUpdate(ownProps) {
        if (ownProps.match && this.props.userId !== ownProps.match.params.userId) {
            this.props.fetchFilteredUserBookMatches(this.props.userId);
        }

    }

    toggleMatches() {
        let matchDiv = document.getElementById('matches-feed-list');
        if (matchDiv.style.display === "none") {
            matchDiv.style.display = "block";
        } else {
            matchDiv.style.display = "none";
        }
    }

    showBookClubModal(){
        this.setState({
            bookClubModal : true
        })
    }

    render() {
        let makeBookClubModal = this.state.bookClubModal ? <MakeBookClubModal show={true}/> : <MakeBookClubModal show={false}/>
        const matches = this.props.matches.map((el, i) =>
                <li key={i} className="matches-feed-list-item">

                <Link key={i} to={`/users/${el._id}`}>
                <h2 className="h2-matches-inner-li">
                    {el.username}
                </h2>
                </Link>
                    <button className="match-user-invite" onClick={this.showBookClubModal}>Invite</button>
                </li>
        )
        return (
            <div className="matches-feed-container">
                <button className="match-feed-btn" onClick={this.toggleMatches} type="button" >Matches</button>
                    <ul id="matches-feed-list">
                        {matches}
                    </ul>
                { makeBookClubModal }
            </div>
        )
    }
}

export default MatchFeed
