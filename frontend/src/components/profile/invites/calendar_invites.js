import React from 'react'

class CalendarInvitesContainer extends React.Component {

    constructor(){
        super();

        this.showInfo = this.showInfo.bind(this)
        this.hideInfo = this.hideInfo.bind(this)
    }

    showInfo(inviteNum){
        let invite = document.getElementById(`text${inviteNum}calendar`)
        invite.classList.add("show")
        invite.classList.remove("hidden")
      }
    
    hideInfo(inviteNum){
        let invite = document.getElementById(`text${inviteNum}calendar`)
        invite.classList.add("hidden")
        invite.classList.remove("show")
    }

    render(){
        debugger
        return(
            <>
                <div className="invites-dropdown-container">
                    <div className="top-invites-inner-container">
                        <p>Calendar Invites</p>   
                    </div>
                {this.props.invites ? this.props.invites.map( (invite,i) => {
                    return(
                        <div className="calendar-invite-container-div"> 
                            <p className="invite-name-container"
                                onMouseEnter={() => this.showInfo(i)}
                                onMouseLeave={() => this.hideInfo(i)}
                            >
                                {invite.title.length > 20 ? invite.title.slice(0,19) + "..." : invite.title}

                                <div 
                                className="calendar-invite-info"
                                id={`text${i}calendar`}
                                >
                                    <h1>{invite.title}</h1>
                                    <p>From: {invite.inviterUsername}</p>
                                    <p>When: {invite.date}</p>
                                    <p>At: {invite.time}</p>
                                </div>
                            </p>
                            <p>
                                On: {invite.date.slice(5,11)} At: {invite.time.slice(0,5)}
                            </p>
                            <button 
                            onClick={() => this.props.handleAccept(invite, "calendar") }
                            className="invites-join-button">Join</button>
                            <button 
                            onClick={() => this.props.handleDeny(invite, "calendar") }
                            className="invites-deny-button">Deny</button>
                        </div>
                    )
                }): ''}
                </div>
            </>
        )
    }
}

export default CalendarInvitesContainer;