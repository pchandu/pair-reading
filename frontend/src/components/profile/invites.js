import React from 'react'

class Invites extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            showInvites: false
        }

        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen(){
        this.setState({
            showInvites: !this.state.showInvites
        })
    }

    render(){
        let {invitesArray } = this.props;
        return(
            <ul>
                <button onClick={this.handleOpen}>Invites! ( {invitesArray.length} )</button>

                <div 
                className={`invites-dropdown-li-items 
                ${this.state.showInvites ? "show" : "hidden"}`}>

                {invitesArray ? invitesArray.map( (invite,idx) => {
                    return(
                        <li className="individual-invite-li-container"> 
                            <p>Title: {invite.title} </p>
                            <p>Inviter: {invite.creator} </p>
                            <button>Join</button>
                            <button>Deny</button>
                        </li>

                    )
                }): ''}
                </div>
            </ul>
        )
    }
}

export default Invites