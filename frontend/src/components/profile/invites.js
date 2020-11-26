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
            calendarInvites: [],
            updated: false
        }
        
        this.bookclubInvites = []
        this.calendarInvites = []

        this.handleOpen = this.handleOpen.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleDeny = this.handleDeny.bind(this)
        this.filterInvites = this.filterInvites.bind(this)
    }

    filterInvites(){
        this.bookclubInvites = []
        this.calendarInvites = []
        
        this.props.invitesArray.forEach( invite => {
            if(invite.type === "calendar"){
                this.calendarInvites.push(invite)
            } else if(invite.type === "bookclub"){
                this.bookclubInvites.push(invite)
            }
        })
        this.setState({updated: !this.state.updated})
    }

    componentDidMount(){
        this.filterInvites()
    }

    handleOpen(){
        this.setState({
            showInvites: !this.state.showInvites
        })
    }

    handleAccept(info,type){
        if(type === "bookclub"){

            this.props.joinBookClub({
                bookclub: info,
                userId: this.props.userId
            }).then( window.location.reload() )

        } else if(type === "calendar"){
            this.props.acceptCalInvite(Object.assign({},info, {userId: this.props.userId}))
                .then(() => this.props.refreshLoggedInUserInfo({user:this.props.userId}))
                .then(setTimeout(() => this.filterInvites, 3000)) 
        }
    }

    handleDeny(info,type){
        if(type === "bookclub"){

            this.props.denyBookClub({
                bookclub: info,
                userId: this.props.userId
            }).then(this.props.refreshLoggedInUserInfo({user:this.props.userId}))
            .then(this.setState({updated: !this.state.updated}))

        } else if (type === "calendar"){
            this.props.denyCalInvite(Object.assign({},info, {userId: this.props.userId}))
                .then(this.props.refreshLoggedInUserInfo({user:this.props.userId}))
                .then(setTimeout(() => this.filterInvites, 3000)) 
        }
    }

    render(){

        // 27 letters
        let { invitesArray } = this.props;

        let bookClubContainer;
        let calendarContainer;

        this.bookclubInvites.length > 0 ? 
        bookClubContainer = < BookClubInvitesContainer
        handleAccept={this.handleAccept}
        handleDeny={this.handleDeny}
        invites={this.bookclubInvites}/> 
        : bookClubContainer = ''

        this.calendarInvites.length > 0 ? 
        calendarContainer = < CalendarInvitesContainer 
        handleAccept={this.handleAccept}
        handleDeny={this.handleDeny}
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