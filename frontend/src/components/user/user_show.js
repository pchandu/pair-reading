import React from 'react';

import BooksContainer from './books_user_container';
import BookClubContainer from './bookclubs_user_container';

import PostContainer from './posts_user_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
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
                        <BookClubContainer match={this.props.match} />
                    </div>
                </div>
                <div className="middle-side-user-show-container">
                    <h1 className="profile-label">Recent Post Activity</h1>
                        <PostContainer match={this.props.match} />
                </div>
                <div className="right-side-user-show-container">
                    <h1 className="profile-label" >Books</h1>
                        <BooksContainer match={this.props.match} owner="user"/>
                </div>
            </div>
        )
    }
}

export default UserShow