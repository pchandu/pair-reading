import React from 'react'
import { Link } from 'react-router-dom'

class PostFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.clearPostsFilter();
        this.props.changePostsFilter("recentCnt",3);
        this.props.fetchFilteredUserPosts(this.props.userId);
    }
    componentDidUpdate(ownProps) {
        if(ownProps.match && this.props.userId !== ownProps.match.params.userId){
            this.props.fetchFilteredUserPosts(this.props.userId);
        }

    }

    render() {
        const posts = this.props.posts.map((el, i) =>
            <Link key={i} to={`/posts/${el._id}`} style={{ textDecoration: 'none'}}>
                <li key={i} className="posts-feed-list-item">
                    <p>{el.body}</p>
                </li>
            </Link>
        )
        return (
            <div className="posts-feed-container">
                <ul className="posts-feed-list">
                    {posts}
                </ul>
            </div>
        )
    }
}

export default PostFeed
