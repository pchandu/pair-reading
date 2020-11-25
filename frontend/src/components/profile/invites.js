import React from 'react'
import { Link } from 'react-router-dom'

import BookClubInvitesContainer from './invites/bookclub_invites'
import CalendarInvitesContainer from './invites/calendar_invites'

class Invites extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            showInvites: false,
            updated: false,
            bookclubInvites: [],
            calendarInvites: []
        }
        
        this.bookclubInvites = []
        this.calendarInvites = []
        this.filterInvites()

        this.handleOpen = this.handleOpen.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleDeny = this.handleDeny.bind(this)
    }

    filterInvites(){
        this.props.invitesArray.forEach( invite => {
            if(invite.type === "calendar"){
                this.calendarInvites.push(invite)
            } else if(invite.type === "bookclub"){
                this.bookclubInvites.push(invite)
            }
        })
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
        let { invitesArray } = this.props;

        let bookClubContainer;
        let calendarContainer;

        this.bookclubInvites.length > 0 ? 
        bookClubContainer = < BookClubInvitesContainer 
        invites={this.bookclubInvites}/> 
        : bookClubContainer = ''

        this.calendarInvites.length > 0 ? 
        calendarContainer = < CalendarInvitesContainer 
        invites={this.calendarInvites}/> 
        : calendarContainer = '' 

        if (invitesArray.length === 0) { 
            return(null)
        }
        return(

            <div className="invites-outside-container">
                <button 
                className="invites-toggle-button"
                onClick={this.handleOpen}>
                    Invites ({invitesArray.length})
                </button>

                <div className={`invites-dropdown-li-items 
                    ${this.state.showInvites ? "show" : "hidden"}`}>
                    {bookClubContainer}
                    {calendarContainer}
                </div>
            </div>
        )
    }
}

export default Invites