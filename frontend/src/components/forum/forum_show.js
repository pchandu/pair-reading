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
    componentWillUpdate(ownProps,ownState){
        if(this.state.page !== ownState.page){
            // debugger
            this.props.changePostsFilter("offset",(ownState.page-1) * this.postsPerPage);
            this.props.fetchFilteredForumPosts(this.props.forumId);
        }
    }
    
    render() {
        // debugger
        const l = this.props.forum.posts ? this.props.forum.posts.length : 1;
        this.maxPage = Math.ceil(l/this.postsPerPage);
        return (
            <div className="forum-show-container">
                <h1 className="forum-title">{this.props.forum.title}</h1>
                {this.state.page === 1 ? <NewPostContainer /> : null}
                <PostsForum props={this.props}/>
                <Nav page={this.state.page} maxPage={this.maxPage} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default ForumShow
