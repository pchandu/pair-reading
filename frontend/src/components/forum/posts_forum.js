import { Link } from 'react-router-dom';

export default ({props}) => {
    const {posts, user} = props;
    // debugger
    return <ul className="forum-show-posts">
        {Object.values(posts).map((post, i) => {
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
            const postInfo = <div>
                <h1>{post.user.username}</h1>
            </div>;
            return (<li className="forum-show-post-item" key={i}>
                <div className="forum-show-post-upper">
                    <div className="forum-show-post-body">
                        <i className="fab fa-ioxhost"></i>
                        {post.body}
                    </div>
                    {actions}

                </div>
                {postInfo}
            </li>)
        })}
    </ul>

}