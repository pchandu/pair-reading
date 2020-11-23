import React from 'react'
import { Link } from 'react-router-dom'

class Invites extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            showInvites: false,
            updated: false
        }

        this.handleOpen = this.handleOpen.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleDeny = this.handleDeny.bind(this)
    }

    handleOpen(){
        this.setState({
            showInvites: !this.state.showInvites
        })
    }
    handleAccept(bookClubId){
        this.props.joinBookClub({
            bookclub: bookClubId,
            userId: this.props.userId
        }).then( window.location.reload() )
    }

    handleDeny(bookClubId){
        this.props.denyBookClub({
            bookclub: bookClubId,
            userId: this.props.userId
        }).then(this.props.refreshLoggedInUserInfo({user:this.props.userId}))
        .then(this.setState({updated: !this.state.updated}))
    }

    render(){

        // 27 letters
        let {invitesArray } = this.props;
        if (invitesArray.length === 0) { 
            return(null)
        }
        return(
            <ul className="invites-outside-container">
                <button 
                className="invites-toggle-button"
                onClick={this.handleOpen}>
                    Invites ({invitesArray.length})
                </button>

                <div 
                className={`invites-dropdown-li-items 
                ${this.state.showInvites ? "show" : "hidden"}`}>
                    <div className="invites-dropdown-container">
                        <div className="top-invites-inner-container">
                            <p>Book Club</p>   
                            <p className="inviter-label">Inviter</p>
                            <div className="hidden-button-div">
                            <button className="invisible invites-hidden-button"/>
                            <button className="invisible invites-hidden-button"/>
                            </div>
                        </div>
                {invitesArray ? invitesArray.map( (invite,idx) => {
                    return(
                        <li className="individual-invite-li-container"> 
                            <label className="invites-outer-label">
                            <Link to={`/bookclubs/${invite.id}`}>
                                {invite.title.length > 27 ? 
                                invite.title.slice(0,26) + "..."
                                : invite.title}
                            </Link>
                            </label>
                            <label className="invites-outer-label">
                            <Link to={`/users/${invite.creatorId}`}>
                                {invite.creator}
                            </Link>
                            </label>

                            <div className="invites-button-container-div">
                                <button 
                                onClick={() => this.handleAccept(invite.id)} 
                                className="invites-join-button">Join</button>

                                <button 
                                onClick={() => this.handleDeny(invite.id)} 
                                className="invites-deny-button">Deny</button>
                            </div>
                        </li>

                    )
                }): ''}
                    </div>
                </div>
            </ul>
        )
    }
}

export default Invites