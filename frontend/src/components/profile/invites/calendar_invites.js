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
        return(
            <>
                <div className="invites-dropdown-container">
                    <div className="top-invites-inner-container">
                        <p>Calendar Invites</p>   
                    </div>
                {this.props.invites ? this.props.invites.map( (invite,i) => {
                    let book = invite.book
                    return(
                        <div className="calendar-invite-container-div"> 
                            <p className="invite-name-container"
                                onMouseEnter={() => this.showInfo(i)}
                                onMouseLeave={() => this.hideInfo(i)}
                            >   
                                <div className="individual-calendar-invite-container">
                                    <p>{invite.title.length > 50 ? invite.title.slice(0,51) + "..." : invite.title} </p>
                                    <p>On: {invite.date.slice(5,11)} At: {invite.time.slice(0,5)}</p>
                                </div>


                                <div 
                                className="calendar-invite-info"
                                id={`text${i}calendar`}
                                >   
                                    <div className="div-container-for-the-outer-title">
                                        <p>{invite.title}</p>

                                        <div className="inner-outer-div-for-cal-invite">
                                        <img className="image-for-cal-invite-book" src={book.imagePath}/>
                                        <div className="right-side-div-for-cal-invite">
                                            <p className="book-show-all-title">{book.title}</p>
                                            <p className="book-show-all-author">{book.author}</p>
                                            <p>From: {invite.inviterUsername}</p>
                                            <p>When: {invite.date}</p>
                                            <p>At: {invite.time}</p>

                                            <div className="inner-button-div-for-cal-invite">
                                                <button 
                                                onClick={() => this.props.handleAccept(invite, "calendar") }
                                                className="invites-join-button">Join</button>
                                                <button 
                                                onClick={() => this.props.handleDeny(invite, "calendar") }
                                                className="invites-deny-button">Deny</button>
                                            </div>
                                        </div>

                                        </div>

                                    </div>
                                </div>
                            </p>
                        </div>
                    )
                }): ''}
                </div>
            </>
        )
    }
}

export default CalendarInvitesContainer;