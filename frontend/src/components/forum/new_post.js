import React from 'react'

export default class NewPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.composePost(Object.assign({}, this.state, {user_id: this.props.userId}, {forum_id: this.props.forum_id}));
        // this.setState({ post: "" });
    }
    render () {
        // debugger
        return (
            <div className="new-post-form-container">
                <h1>New Post</h1>
                <form className={`new-post-form`} onSubmit={this.handleSubmit}>
                    <textarea
                        // type="textarea"
                        className="new-post-text"
                        onChange={this.handleChange('post')}
                    />
                    <input
                        className={`match-user-invite`}
                        type="submit"
                        value="Post"
                    />
                </form>
            </div>
        )
    }
}