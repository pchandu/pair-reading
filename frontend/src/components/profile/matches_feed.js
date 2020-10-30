import React from 'react'
import { Link } from 'react-router-dom'

class MatchFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.clearUsersFilter();
        this.props.fetchFilteredUserMatches(this.props.userId);
    }

    render() {
        const matches = this.props.matches.map((el, i) =>
            <Link to={`/matches/${el._id}`}>
                <li key={i} className="matches-feed-list-item">
                    <h2>{el.username}</h2>
                </li>
            </Link>
        )
        return (
            <div className="matches-feed-container">
                <ul className="matches-feed-list">
                    {matches}
                </ul>
            </div>
        )
    }
}

export default MatchFeed
