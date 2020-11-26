import { connect } from 'react-redux'
import { joinBookClub, denyBookClub } from '../../util/bookclub_util'
import Invites from './invites'
import { refreshLoggedInUserInfo } from '../../actions/session_actions'
import { acceptCalInvite, denyCalInvite } from '../../util/user_util'

const mSTP = ({session,entities}) => {
    return({
        invitesArray: session.user.invites,
        userId : session.user.id
    })
}

const mDTP = dispatch =>  {
    return({
        joinBookClub: (bookClubData) => joinBookClub(bookClubData),
        denyBookClub: (bookClubData) => denyBookClub(bookClubData),
        refreshLoggedInUserInfo: (loggedInUser) => dispatch(refreshLoggedInUserInfo(loggedInUser)),
        
        acceptCalInvite: (inviteInfo) => acceptCalInvite(inviteInfo),
        denyCalInvite: (inviteInfo) => denyCalInvite(inviteInfo),
    })
}

export default connect(mSTP,mDTP)(Invites) 