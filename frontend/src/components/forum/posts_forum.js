export default ({props}) => {
    debugger
    const {posts} = props;
    return <ul className="forum-show-posts">
        {Object.values(posts).map((post, i) => (
            <li key={i}>{post.body}</li>
        ))}
    </ul>

}