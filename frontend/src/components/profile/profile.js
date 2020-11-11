import React from 'react';
import {Link} from 'react-router-dom'
import BooksFeedContainer from './books_feed_container';
import BookClubFeedContainer from './bookclubs_feed_container';
import MatchFeedContainer from './matches_feed_container';
import PostFeedContainer from './posts_feed_container';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="profile-container">
                <div className="profile-username">
                    {/* {this.props.user.id} */}
                    {this.props.user.username}
                </div>
                <div className="profile-email">
                    {this.props.user.email}
                </div>
                <h1 className="profile-label" >Matches</h1>
                <MatchFeedContainer/>

                <h1 className="profile-label" >Books</h1>
                <BooksFeedContainer />
                <h1 className="profile-label">Bookclubs</h1>

                <BookClubFeedContainer/>
                <h1 className="profile-label">Recent Post Activity</h1>
                <PostFeedContainer/>

            </div>
        )  
    }
}

export default Profile