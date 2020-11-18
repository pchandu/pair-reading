import React from 'react'

class Invites extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        let {invitesArray } = this.props;
        return(
            <ul>
                <h1>Top of Invites Arr</h1>
                <div className="invites-dropdown-li-items hidden">
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