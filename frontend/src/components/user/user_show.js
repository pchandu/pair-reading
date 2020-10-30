import React from 'react';
import { Link } from 'react-router-dom'
import BooksContainer from './books_user_container';
import BookClubContainer from './bookclubs_user_container';
import MatchContainer from './matches_user_container';
import PostContainer from './posts_user_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        // debugger
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        // debugger
        const {user} = this.props;
        let username = undefined;
        let email = undefined;
        if(!!user){
            username = user.username;
            email = user.email;
        }
        return (
            <div className="user-show-container">
                <div className="user-show-username">
                    {/* {this.props.user.id} */}
                    {username}
                </div>
                <div className="user-show-email">
                    {email}
                </div>
                <h1 className="user-show-label" >Matches</h1>
                <ul className="user-show-matches">
                    <MatchContainer match={this.props.match} />
                </ul>
                <h1 className="user-show-label" >Books</h1>
                    <BooksContainer match={this.props.match} />
                <h1 className="user-show-label">Bookclubs</h1>
                <ul className="user-show-bookclubs">
                    <BookClubContainer match={this.props.match} />
                </ul>
                <h1 className="user-show-label">Recent Post Activity</h1>
                <ul className="user-show-posts">
                    <PostContainer match={this.props.match} />
                </ul>
            </div>
        )
    }
}

export default UserShow