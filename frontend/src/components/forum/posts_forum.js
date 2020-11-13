import { Link } from 'react-router-dom';

export default ({props}) => {
    const {posts, user} = props;
    debugger
    return <ul className="forum-show-posts">
        {Object.values(posts).map((post, i) => {
            const actions = (post.user === user.id) ? <div className="forum-show-post-actions">
                <div>
                    <i className="fas fa-pen"></i>
                </div>
                <div>
                    <i className="fas fa-trash"></i>
                </div>
            </div> : null;
            return (<li className="forum-show-post-item" key={i}>
                <div className="forum-show-post-body">
                    <i className="fab fa-ioxhost"></i>
                    {post.body}
                </div>
                {actions}
            </li>)
        })}
    </ul>

}