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
        // const body = document.getElementsByClassName("user-show-content-container")[0];
        // body.classList.add(`session-img`)
        // body.classList.add(`background-${Math.floor(Math.random() * 8) + 1}`);
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
            <div className="user-show-content-container">
                <div className="left-side-user-show-container">
                    <div className="profile-container">
                        <div className="profile-username">
                            {/* {this.props.user.id} */}
                            {username}
                        </div>
                        <div className="profile-email">
                            {email}
                        </div>
                    <h1 className="profile-label">Bookclubs</h1>
                    <ul className="user-show-bookclubs">
                        <BookClubContainer match={this.props.match} />
                    </ul>
                    </div>
                </div>
                <div className="left-side-user-show-container">
                    <h1 className="profile-label">Recent Post Activity</h1>
                    <ul className="user-show-posts">
                        <PostContainer match={this.props.match} />
                    </ul>
                </div>
                <div className="left-side-user-show-container">
                    <h1 className="profile-label" >Books</h1>
                        <BooksContainer match={this.props.match} />
                </div>
            </div>
        )
    }
}

export default UserShow