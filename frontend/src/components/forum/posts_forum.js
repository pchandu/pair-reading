import { Link } from 'react-router-dom';
import React from 'react'


class PostsForum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: [],
            post: ""
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    toggleEdit(idx) {
        let newEdit = Array(this.state.edit.length).fill(false);
        newEdit[idx] = !this.state.edit[idx];
        debugger
        let targetPost = this.props.posts[this.props.posts.order[idx]];
        this.setState({
            edit: newEdit,
            post: targetPost.body
        })
    }
    handleSubmit(id) {
        return (e) => {
            e.preventDefault();
            debugger
            // console.log(id)
            this.props.updatePost(id, Object.assign({}, {post: this.state.post}));
            // this.setState({ post: "" });
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if(this.state.edit.length !== nextProps.posts.length){ // new posts
            this.state.edit = Array(nextProps.posts.length).fill(false);
        }
    }
    render () {
        debugger

        let {posts, user} = this.props;
        posts = Object.assign({}, posts);
        const order = posts.order ? posts.order : [];
        delete posts['order'];
        let post;
        if(Object.values(posts).length !== 0)
        {
        return <ul className="forum-show-posts">
            {order.map((key, i) => {
                post = posts[key];
                const date = new Date(post.createdAt);
                const month = date.toLocaleString('default', { month: 'long' });
                const dd = date.getDate();
                const yyyy = date.getFullYear();
                // if(post.user.username === "Demo User") debugger;
                // debugger
                const actions = (post.user._id === user.id) ? <div className="forum-show-post-actions">
                    <div className="edit-button" onClick={() => this.toggleEdit(i)}>
                        <i className="fas fa-pen"></i>
                    </div>
                    <div className="delete-button" onClick={() => this.props.deletePost(key)}>
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
                    {/* <h1>{post.createdAt}</h1> */}
                    {/* <h1>{date}</h1> */}
                    </div>
                </div>;
                const editPost = <form className="forum-show-edit-post" onSubmit={this.handleSubmit(post._id)}>
                    <textarea
                        // type="textarea"
                        className="edit-post-text"
                        onChange={this.handleChange('post')}
                        value={this.state.post}
                    />
                    <input
                        className={`match-user-invite edit-post-btn`}
                        type="submit"
                        value="Edit"
                    />
                </form>
                return (<li className="forum-show-post-item" key={i}>
                    {postInfo}
                    <div className="forum-show-post-main">
                        <div className="forum-show-post-body">
                            <i className="fab fa-ioxhost"></i>
                            {this.state.edit[i] ? editPost : post.body}
                        </div>
                        {actions}
                    </div>
                </li>)
            })}
        </ul>
        }else{
            return <div></div>
        }
    }
}

export default PostsForum