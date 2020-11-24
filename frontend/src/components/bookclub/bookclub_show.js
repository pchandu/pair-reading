import React from 'react'
import { Link } from 'react-router-dom'
import ForumCreate from '../forum/forum_create_container';
import BooksContainer from './books_bookclub_container';
// import { Redirect } from 'react-router-dom'

class BookClubShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inviteName: '',
            inviteMessage: ''
        }

        this.deleteBookClub = this.deleteBookClub.bind(this)
        this.inviteToBookClub = this.inviteToBookClub.bind(this)
        this.leaveBookClub = this.leaveBookClub.bind(this)
    }

    componentDidMount() {
        this.props.clearForumsFilter();
        this.props.clearBooksFilter();
        this.props.clearUsersFilter();
        this.props.fetchBookClub(this.props.bookclubId);
        this.props.fetchFilteredBookClubForums(this.props.bookclubId);
        // this.props.fetchFilteredBookClubBooks(this.props.bookclubId);
        this.props.fetchFilteredBookClubUsers(this.props.bookclubId);
    }

    deleteBookClub(e){
        e.preventDefault();

        if(window.confirm("This will delete your bookclub, Do you really want to?")){
            this.props.deleteBookClub({
                title: this.props.bookclub.title, 
                creator: this.props.userId
            }).then( this.props.history.push("/dashboard") )
        }
    }

    leaveBookClub(){
        debugger;
        this.props.leaveBookClub({
            bookClubId: this.props.bookclubId,
            userId: this.props.userId
        })
    }

    update(field){
        return (e) =>{
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    inviteToBookClub(event){
        event.preventDefault();

        this.props.inviteToBookClub({
            invite: this.state.inviteName,
            bookClubId: this.props.bookclubId,
            bookClubTitle: this.props.bookclub.title,
            inviter: this.props.username,
            inviterId: this.props.userId
        })
        .then( (res) => {
            console.log(res)
            if(res.data["err"]){
                this.setState({
                    inviteName: '',
                    inviteMessage: res.data["err"],
                })
            }else{
                this.setState({
                    inviteName: '',
                    inviteMessage: `Invite sent to, ${this.state.inviteName}`,
                })
            }
        })
    }

    render() {
        const { bookclub} = this.props;

        const forums = this.props.forums.map((el, i) =>
            <Link key={i} to={`/forums/${el._id}`} className="bookclub-forums-list-link">
                <li key={i} className="bookclub-forums-list-item">
                    <h2>{el.title}</h2>
                </li>
            </Link>
        )
        const users = this.props.users.map((el, i) =>
            <Link key={i} to={`/users/${el._id}`}>
                <li key={i} className="bookclub-users-list-item">
                    <h2>{el.username}</h2>
                </li>
            </Link>
        )
        let deleteButton;
        let leaveButton;
        if(this.props.bookclub){
        deleteButton = this.props.bookclub.creator === this.props.userId ? 
        <button 
        className="bookclub-show-delete-button btn btn-info" 
        onClick={this.deleteBookClub}
        >Delete Book Club</button> 
        : ''

        leaveButton = 
        this.props.bookclub.creator != this.props.userId &&
        this.props.bookclub.users.includes(this.props.userId)? 
        <button
        className="bookclub-show-leave-button btn btn-info"
        onClick={this.leaveBookClub}>
        Leave Book Club </button> : ''
        }


        
        return (
          <div className="bookclub-show-container">
            <h1 className="bookclub-header">
              BookClub -
              <h2 className="bookclub-title">
                {bookclub ? bookclub.title : ""}
              </h2>
              {deleteButton}
            </h1>
            <div className="bookclub-show-content-container">
              <div className="left-side-bookclub-show-container">
                    <h1 className="profile-label-bookclub">
                    <p><i class="fas fa-users" />Members</p>
                    {leaveButton}
                    </h1>

                    <div className="bookclub-users-container">
                        <ul className="bookclub-users-list">
                            {users}
                        </ul>

                        <form onSubmit={this.inviteToBookClub} className="bookclub-invite-form">
                            <h1>Invite someone to the bookclub!</h1>
                            <div className="btn-and-input-for-bookclub-invite">
                            <input type="text" 
                            onChange={this.update('inviteName')} 
                            value={this.state.inviteName}
                            className="input-bookclub-invite"
                            />
                            <input type="submit" className="btn btn-info invite-to-bookclub-button"/>
                            </div>
                            <p>{this.state.inviteMessage}</p>
                        </form>

                    </div>
                </div>


            <div className="right-side-bookclub-show-container">
                    <h1 className="profile-label">
                    {" "}
                    <i class="fas fa-book-open"></i>Books
                    </h1>
                    <ul className="bookclub-books-list">
                    <BooksContainer match={this.props.match} owner="bookclub" />
                    </ul>
                    <h1 className="profile-label-forum">
                    Forums
                    <ForumCreate bookclubId={this.props.bookclubId} />
                    </h1>
                    <div className="bookclub-forums-container">
                    <ul className="bookclub-forums-list">{forums}</ul>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default BookClubShow