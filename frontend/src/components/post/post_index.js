import React from 'react'


class PostIndex extends React.Component {

    constructor(props) {
        super(props)
        // debugger
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        // if (!this.props.posts) return null
        if (!this.props.posts) return <div />
        const { posts } = this.props;

        return (
            <div className="browse-container">
                {Object.values(posts).map((post, i) => {
                    return (
                        <div key={post._id} className="post-index-container">
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostIndex