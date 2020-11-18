import { connect } from 'react-redux'
import Invites from './invites'

const mSTP = ({session,entities}) => {
    return({
        invitesArray: session.user.invites,
    })
}

const mDTP = dispatch =>  {
    return({

    })
}

export default connect(mSTP,mDTP)(Invites) 