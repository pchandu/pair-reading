import React from 'react'

class Invites extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            showInvites: false
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
        })
    }

    handleDeny(){

    }

    render(){
        let {invitesArray } = this.props;
        return(
            <ul className="invites-outside-container">
                <button 
                className="btn btn-info"
                onClick={this.handleOpen}>
                    Invites! ( {invitesArray.length} )
                </button>

                <div 
                className={`invites-dropdown-li-items 
                ${this.state.showInvites ? "show" : "hidden"}`}>

                {invitesArray ? invitesArray.map( (invite,idx) => {
                    return(
                        <li className="individual-invite-li-container"> 
                            <p>Title: {invite.title} </p>
                            <p>Inviter: {invite.creator} </p>

                            <button 
                            onClick={() => this.handleAccept(invite.id)} 
                            className="btn btn-success">Join</button>

                            <button 
                            onClick={this.handleDeny} 
                            className="btn btn-danger">Deny</button>
                        </li>

                    )
                }): ''}
                </div>
            </ul>
        )
    }
}

export default Invites