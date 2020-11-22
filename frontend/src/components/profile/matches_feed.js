import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

class MatchFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookClubModal: false,
            userEl: '',
            bookClubTitle: '',
            showMatches: false,
            loaded: false
        }

        this.showBookClubModal = this.showBookClubModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.makeBookClub = this.makeBookClub.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleMatches = this.toggleMatches.bind(this)
    }

    componentDidMount() {
        this.props.clearUsersFilter();
        this.props.fetchFilteredUserBookMatches(this.props.userId)
            .then(this.setState({ loaded: true}))
    }

    toggleMatches() {
        this.setState({showMatches: !this.state.showMatches})
    }

    showBookClubModal(user){
        this.setState({
            bookClubModal : true,
            userEl: user, 
        })
    }

    handleClose(){
        this.setState({
            bookClubModal: false
        })
    }

    makeBookClub(event){
        event.preventDefault();
        this.props.makeBookClub({
            title: this.state.bookClubTitle,
            creator: this.props.userId,
            invitee: this.state.userEl
            })
            .then( this.setState({bookClubModal: false}) )
            .then( window.location.reload() )
        }

    handleChange(field) {
        return (e) => 
        this.setState({
            [field]:e.currentTarget.value
        })
    }

// bookclubs: (4) ["5fb84c0755c823627bbf1f81", 
// "5fb84c0755c823627bbf1f8a", "5fb84c0755c823627bbf1f8b", "5fb84c0755c823627bbf1f8d"]
// books: ["5fb84c0755c823627bbf1f74"]
// createdAt: "2020-11-20T23:06:50.070Z"
// email: "praneethchandu@pairreading.com"
// invites: []
// password: "$2a$10$HWYJ422vYwk4WCDrlwF/HO.sRH.Vz5WhY/ET31QHZbnY9ib9E4L2y"
// posts: (23) ["5fb84c0755c823627bbf1fa4", "5fb84c0755c823627bbf1fa8", 
// "5fb84c0755c823627bbf1fb7", "5fb84c0755c823627bbf1fea", "5fb84c0755c823627bbf1feb", "5fb84c0755c823627bbf1ff0", 
// "5fb84c0755c823627bbf2006", "5fb84c0755c823627bbf200b", "5fb84c0755c823627bbf2013", "5fb84c0755c823627bbf202f", 
// "5fb84c0755c823627bbf2040", "5fb84c0755c823627bbf2047", "5fb84c0755c823627bbf2081", "5fb84c0755c823627bbf209f", 
// "5fb84c0755c823627bbf20b5", "5fb84c0755c823627bbf20e1", "5fb84c0755c823627bbf20e2", "5fb84c0755c823627bbf20f0", 
// "5fb84c0755c823627bbf2108", "5fb84c0755c823627bbf2144", "5fb84c0755c823627bbf2181", "5fb84c0755c823627bbf2184", 
// "5fb84c0755c823627bbf218d"]
// preferred_meeting_time: {M: false, A: false, E: false}
// updatedAt: "2020-11-20T23:06:50.070Z"
// username: "Praneeth Chandu"


    render() {
        const { userEl } = this.state;
        const { books,followedBooks } = this.props;

        let matchedBooks = books && userEl ? 
        userEl.books.map( bookId => {
            if (books.includes(bookId)){ return bookId }
        })
        : ''
        
        const matches = this.props.matches.map((el, i) =>{
            return(
                // Individual list item rows
                <li key={i} className="matches-feed-list-item">
                    <Link key={i} to={`/users/${el._id}`} className="matches-link-item">
                        {el.username}
                    </Link>
                    <button className="match-user-invite" 
                    onClick={() => this.showBookClubModal(el)}>Invite</button>
                </li>
        )})
        return (
            <div className="matches-feed-container">
                <button className="match-feed-btn" 
                onClick={this.toggleMatches} type="button" >Matches ({this.props.matches.length})</button>
                    <ul className={`${this.state.showMatches ? "show" : "hidden"} ul-matches-container`}>
                        <div className="div-matches-container">
                        {matches}
                        </div>
                    </ul>


                <Modal 
                show={this.state.bookClubModal} 
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-bookclub-creation"
                dialogClassName="modal-bookclub-dialog-class"
                contentClassName="modal-bookclub-creation-content"
                > 
                <h1 className="modal-bookclub-header">Book Club Creation</h1>   
                <form onSubmit={this.makeBookClub} className="form-bookclub-creation">
                    <input type="text" 
                    placeholder="Bookclub Name" 
                    value={this.state.bookClubTitle}
                    onChange={this.handleChange("bookClubTitle")}
                    centered="true"
                    className="modal-bookclub-input-title form-control" 
                    />
                    <ul>
                        <p>Books you and {this.state.userEl.username} share interest:</p>
                        {matchedBooks ? matchedBooks.map(bookId => {
                            let followedBook = followedBooks[bookId]
                            return(
                                <p> 
                                    {followedBook.title}
                                </p>
                            )
                        }): ''}
                    </ul>
                    <input 
                    type="submit" 
                    value={`Make bookclub and invite ${this.state.userEl.username}`}
                    className="create-bookclub-button btn btn-info" 
                    />
                </form>

                <button onClick={this.handleClose} className="create-bookclub-button btn btn-info">Close</button>
                </Modal>
            </div>
        )
    }
}

export default MatchFeed
