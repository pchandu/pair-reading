import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

class MatchFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookClubModal: false,
            userEl: ''
        }

        this.showBookClubModal = this.showBookClubModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        this.props.clearUsersFilter();
        this.props.fetchFilteredUserBookMatches(this.props.userId);
    }
    componentDidUpdate(ownProps) {
        if (ownProps.match && this.props.userId !== ownProps.match.params.userId) {
            this.props.fetchFilteredUserBookMatches(this.props.userId);
        }

    }

    toggleMatches() {
        let matchDiv = document.getElementById('matches-feed-list');
        if (matchDiv.style.display === "none") {
            matchDiv.style.display = "block";
        } else {
            matchDiv.style.display = "none";
        }
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
        // event.preventDefault();
    }


    render() {
        const matches = this.props.matches.map((el, i) =>{
            return(
                <li key={i} className="matches-feed-list-item">

                <Link key={i} to={`/users/${el._id}`}>
                <h2 className="h2-matches-inner-li">
                    {el.username}
                </h2>
                </Link>
                    <button className="match-user-invite" onClick={() => this.showBookClubModal(el)}>Invite</button>
                </li>
        )})
        return (
            <div className="matches-feed-container">
                <button className="match-feed-btn" onClick={this.toggleMatches} type="button" >Matches ({this.props.matches.length})</button>
                    <ul id="matches-feed-list">
                        {matches}
                    </ul>


                <Modal 
                show={this.state.bookClubModal} 
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-bookclub-creation"
                contentClassName="modal-bookclub-creation-content"
                > 

                <h1 className="modal-bookclub-header">Create a BookClub</h1>


                
                
                <form onSubmit={() => this.makeBookClub()} className="form-bookclub-creation">
                    <input type="text" placeholder="Name"/>

                    <input 
                    type="submit" 
                    value={`Make bookclub and invite ${this.state.userEl.username}`} 
                    />
                </form>
                <button onClick={this.handleClose}>
                Close
                </button>

                </Modal>
            </div>
        )
    }
}

export default MatchFeed
