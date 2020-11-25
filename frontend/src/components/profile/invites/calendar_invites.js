import React from 'react'

class CalendarInvitesContainer extends React.Component {

    render(){
        return(
            <>
                <div className="invites-dropdown-container">
                    <div className="top-invites-inner-container">
                        <p>Calendar Invites</p>   
                    </div>
                {/* date: "2020-12-02"
                inviterUsername: null
                time: "08:00:00"
                title: "asdfasdf"
            type: "calendar" */}
                {this.props.invites ? this.props.invites.map( (invite,i) => {
                    return(
                        <div className="calendar-invite-container-div"> 
                            <p>
                                {invite.title}
                                <div 
                                className="calendar-invite-info"
                                id={`text${i}calendar`}
                                >

                                </div>
                            </p>
                            <p>
                                On: {invite.date.slice(5,11)} At: {invite.time.slice(0,5)}
                            </p>
                            <button className="invites-join-button">Join</button>
                            <button className="invites-deny-button">Deny</button>
                        </div>
                    )
                }): ''}
                </div>
            </>
        )
    }
}

export default CalendarInvitesContainer;