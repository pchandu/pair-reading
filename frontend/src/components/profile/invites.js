import React from 'react'
import { Link } from 'react-router-dom'

import BookClubInvitesContainer from './invites/bookclub_container'
import CalendarInvitesContainer from './invites/calendar_container'

class Invites extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            showInvites: false,
            updated: false,
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

    handleAccept(info,type){
        if(type === "bookclub"){

            this.props.joinBookClub({
                bookclub: info,
                userId: this.props.userId
            })
            .then( () =>{ 

            this.props.refreshLoggedInUserInfo({user:this.props.userId})
            
            this.props.fetchFilteredUserBookClubs(this.props.userId) 
        })

        } else if(type === "calendar"){
            this.props.acceptCalInvite(Object.assign({},info, {userId: this.props.userId}))
                .then(  () => this.props.refreshLoggedInUserInfo({user:this.props.userId}))
        }
    }

    handleDeny(info,type){
        if(type === "bookclub"){

            this.props.denyBookClub({
                bookclub: info,
                userId: this.props.userId
            })
            .then(() => this.props.refreshLoggedInUserInfo({user:this.props.userId}))

        } else if (type === "calendar"){
            this.props.denyCalInvite(Object.assign({},info, {userId: this.props.userId}))
                .then(() => this.props.refreshLoggedInUserInfo({user:this.props.userId}))
        }
    }

    render(){

        // 27 letters
        let { invitesArray } = this.props;

        let bookClubContainer;
        let calendarContainer;

        bookClubContainer = < BookClubInvitesContainer
        handleAccept={this.handleAccept}
        handleDeny={this.handleDeny} /> 

        calendarContainer = < CalendarInvitesContainer 
        handleAccept={this.handleAccept}
        handleDeny={this.handleDeny} /> 

        if (invitesArray.length === 0) { 
            return(null)
        }
        return(

            <div className="invites-outside-container">
                <button 
                className="invites-toggle-button"
                onClick={this.handleOpen}>
                    <i class="fas fa-user-friends"></i>Invites ({invitesArray.length})
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