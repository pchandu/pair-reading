import React from 'react'
import { Link } from 'react-router-dom'

class MatchFeed extends React.Component {

    constructor(props) {
        super(props)
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

    render() {
        const matches = this.props.matches.map((el, i) =>
                <li key={i} className="matches-feed-list-item">

                <Link key={i} to={`/users/${el._id}`}>
                <h2 className="h2-matches-inner-li">
                    {el.username}
                </h2>
                </Link>
                    <button className="match-user-invite">Invite</button>
                </li>
        )
        return (
            <div className="matches-feed-container">
                <button className="match-feed-btn" onClick={this.toggleMatches} type="button" >Matches ({this.props.matches.length})</button>
                    <ul id="matches-feed-list">
                        {matches}
                    </ul>
            </div>
        )
    }
}

export default MatchFeed
