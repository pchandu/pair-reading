import React from 'react'


class ForumShow extends React.Component {

    constructor(props) {
        super(props)
        debugger
        this.props.clearPostsFilter();
    }

    componentDidMount() {
        this.props.fetchFilteredForumPosts(this.props.forumId);
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="forum-show-container">
                <ul className = "forum-show-posts">
                {Object.values(posts).map((post, i) => (
                    <li key={i}>{post.body}</li>
                ))}
                </ul>
            </div>
        )
    }
}

export default ForumShow