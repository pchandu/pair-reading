import { connect } from 'react-redux'
import { joinBookClub, denyBookClub } from '../../util/bookclub_util'
import Invites from './invites'
import { refreshLoggedInUserInfo } from '../../actions/session_actions'
import { acceptCalInvite, denyCalInvite } from '../../util/user_util'

import { fetchFilteredUserBookClubs } from '../../actions/filters/bookclub_filter_actions';

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
        fetchFilteredUserBookClubs: (userId) => dispatch(fetchFilteredUserBookClubs(userId))
    })
}

export default connect(mSTP,mDTP)(Invites) 