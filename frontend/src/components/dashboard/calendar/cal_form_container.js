import { createCalInvite } from "../../../util/user_util";
import { refreshLoggedInUserInfo } from '../../../actions/session_actions'
import CalendarForm from "./cal_form";
import { connect } from "react-redux";


const mSTP = ({session: {user}, entities:{users}}) => {
  return {
    matches: Object.values(users).filter(el => el._id !== user.id),
    userId: user.id
  };
};

const mDTP = (dispatch, ownProps) => {
  debugger
  return {
    createCalInvite: inviteInfo => createCalInvite(inviteInfo),
    showForm: num => ownProps.showForm(num),
    refreshUserInfo: (userId) => dispatch(refreshLoggedInUserInfo(userId))
  };
};

export default connect(mSTP, mDTP)(CalendarForm);
