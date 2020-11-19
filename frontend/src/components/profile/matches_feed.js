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
            showMatches: false
        }

        this.showBookClubModal = this.showBookClubModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.makeBookClub = this.makeBookClub.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleMatches = this.toggleMatches.bind(this)
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


    render() {
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
