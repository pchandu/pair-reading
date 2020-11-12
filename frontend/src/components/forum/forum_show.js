import React from 'react'
import PostsForum from './posts_forum';


class ForumShow extends React.Component {

    constructor(props) {
        super(props)
        // debugger
    }
    
    componentDidMount() {
        this.props.clearPostsFilter();
        this.props.fetchForum(this.props.forumId);
        this.props.fetchFilteredForumPosts(this.props.forumId);
    }

    render() {
        debugger
        return (
            <div className="forum-show-container">
                <h1>{this.props.forum.title}</h1>
                <PostsForum props={this.props}/>
            </div>
        )
    }
}

export default ForumShow