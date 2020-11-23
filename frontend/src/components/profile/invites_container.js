import { connect } from 'react-redux'
import { joinBookClub, denyBookClub } from '../../util/bookclub_util'
import Invites from './invites'
import {refreshLoggedInUserInfo} from '../../actions/session_actions'

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
        refreshLoggedInUserInfo: (loggedInUser) => dispatch(refreshLoggedInUserInfo(loggedInUser)) 
    })
}

export default connect(mSTP,mDTP)(Invites) 