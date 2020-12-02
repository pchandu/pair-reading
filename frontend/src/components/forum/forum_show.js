import React from 'react'
import PostsForum from './posts_forum';
import Nav from './forum_show_nav'
import NewPostContainer from './new_post_container'


class ForumShow extends React.Component {

    constructor(props) {
        super(props)
        this.postsPerPage = 5;
        this.state = {
            page: 1
        }
        this.handleClick = this.handleClick.bind(this);
        // debugger
    }
    
    componentDidMount() {
        this.props.clearPostsFilter();
        this.props.fetchForum(this.props.forumId);
        this.props.changePostsFilter("recentCnt", this.postsPerPage);
        this.props.fetchFilteredForumPosts(this.props.forumId);
    }
    handleClick(type){
        // debugger
        return (e) => {
            switch(type){
                case "next":
                    this.setState({ page: this.state.page + 1})
                    break;
                case "prev":
                    this.setState({ page: this.state.page - 1 })
                    break;
                default:
                    break;
            }
        }
    }
    componentWillUpdate(nextProps,nextState){
        // if(this.props.posts.length !==)
        const cond1 = this.state.page !== nextState.page; // page change
        const cond2 = Object.keys(nextProps.posts).length !== Object.keys(this.props.posts).length; // post was deleted or added
        // debugger
        if(cond1 || cond2){
            // this.props.fetchForum(this.props.forumId);
            this.props.changePostsFilter("offset",(nextState.page-1) * this.postsPerPage);
            this.props.fetchFilteredForumPosts(this.props.forumId);
            if(cond2){
                this.props.fetchForum(this.props.forumId);
            }
        }
    }
    
    render() {
        // debugger
        const l = (this.props.forum.posts && this.props.forum.posts.length > 0) ? this.props.forum.posts.length : 1;
        this.maxPage = Math.ceil(l/this.postsPerPage);
        // debugger
        return (
            <div className="forum-show-container">
                <h1 className="forum-title">{this.props.forum.title}</h1>
                {this.state.page === 1 ? <NewPostContainer forum_id={this.props.forumId}/> : null}
                <PostsForum {...this.props}/>
                <Nav page={this.state.page} maxPage={this.maxPage} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default ForumShow
