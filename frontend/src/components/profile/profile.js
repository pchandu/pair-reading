import React from 'react';
import {Link} from 'react-router-dom'
import BooksFeedContainer from './books_feed_container';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

    }

    componentDidMount(){

    }

    render(){
        const bookclubs = this.props.user.bookclubs.map(el => 
            <li>
                {el}
            </li>    
        )       
        const posts = this.props.user.posts.map(el => 
            <li>
                {el}
            </li>    
        )       
        return(
            <div className="profile-container">
                <div className="profile-username">
                    {/* {this.props.user.id} */}
                    {this.props.user.username}
                </div>
                <div className="profile-email">
                    {this.props.user.email}
                </div>
                <h1>Books</h1>
                    <BooksFeedContainer />
                <h1>Bookclubs</h1>
                <ul className = "profile-bookclubs">
                    {bookclubs}
                </ul>
                <h1>Posts</h1>
                <ul className = "profile-posts">
                    {posts}
                </ul>
            </div>
        )  
    }
}

export default Profile