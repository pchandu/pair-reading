import { connect } from 'react-redux'
import BookClubs from './bookclub_invites'

const mSTP = (state) => {
    let bookclubInvites = [];
    state.session.user.invites.forEach(invite =>{
        if(invite.type === "bookclub"){
            bookclubInvites.push(invite)
        }
    })
    return({
        invites: bookclubInvites
    })
}

const mDTP = (dispatch) => {
    return({})
}

export default connect(mSTP,mDTP)(BookClubs);