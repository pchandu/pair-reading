import React from 'react'
import { Link } from 'react-router-dom'

class BookClubInvitesContainer extends React.Component {

    render(){
        debugger;
        return(
            <>     
            <div className="invites-dropdown-container">
                <div className="top-invites-inner-container">
                    <p>Book Club Invites</p>   
            </div>

            {this.props.invites? this.props.invites.map( (invite,idx) => {
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
                            onClick={() => this.props.handleAccept(invite.id,"bookclub")} 
                            className="invites-join-button">Join</button>

                            <button 
                            onClick={() => this.props.handleDeny(invite.id,"bookclub")} 
                            className="invites-deny-button">Deny</button>
                        </div>
                    </li>

                )
            }): ''}

            </div>

        </>
        )
    }
}

export default BookClubInvitesContainer;