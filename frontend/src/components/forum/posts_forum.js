import { Link } from 'react-router-dom';

export default ({props}) => {
    const {posts, user} = props;
    // debugger
    return <ul className="forum-show-posts">
        {Object.values(posts).map((post, i) => {
            const date = new Date(post.createdAt);
            const month = date.toLocaleString('default', { month: 'long' });
            const dd = date.getDate();
            const yyyy = date.getFullYear();
            if(post.user.username === "Demo User") debugger;
            // debugger
            const actions = (post.user._id === user.id) ? <div className="forum-show-post-actions">
                <div className="edit-button">
                    <i className="fas fa-pen"></i>
                </div>
                <div className="delete-button">
                    <i className="fas fa-trash"></i>
                </div>
            </div> : null;
            const postInfo = <div className="post-info">
                <div className="post-info-profile">
                <Link to={`/users/${post.user._id}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-user"></i>
                    {post.user.username}
                </Link>
                <h1 className="post-info-date">{month} {dd} {yyyy}</h1>
                </div>
            </div>;
            return (<li className="forum-show-post-item" key={i}>
                {postInfo}
                <div className="forum-show-post-main">
                    <div className="forum-show-post-body">
                        <i className="fab fa-ioxhost"></i>
                        {post.body}
                    </div>
                    {actions}
                </div>
            </li>)
        })}
    </ul>

}