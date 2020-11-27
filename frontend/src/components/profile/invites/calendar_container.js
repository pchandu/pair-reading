import { connect } from 'react-redux'
import Calendars from './calendar_invites'

const mSTP = (state) => {
    let calendarInvites = [];
    state.session.user.invites.forEach(invite =>{
        if(invite.type === "calendar"){
            calendarInvites.push(invite)
        }
    })
    return({
        invites: calendarInvites
    })
}

const mDTP = (dispatch) => {
    return({})
}

export default connect(mSTP,mDTP)(Calendars);