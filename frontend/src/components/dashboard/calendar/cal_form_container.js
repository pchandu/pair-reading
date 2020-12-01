import { createCalInvite } from "../../../util/user_util";
import { refreshLoggedInUserInfo } from '../../../actions/session_actions'
import CalendarForm from "./cal_form";
import { connect } from "react-redux";


const mSTP = ({session: {user}, entities:{users, books}}) => {
  // debugger
  return {
    books: Object.values(books),
    matches: Object.values(users).filter(el => el._id !== user.id),
    userId: user.id
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    createCalInvite: inviteInfo => createCalInvite(inviteInfo),
    showForm: (num,msg) => ownProps.showForm(num,msg),
    refreshUserInfo: (userId) => dispatch(refreshLoggedInUserInfo(userId))
  };
};

export default connect(mSTP, mDTP)(CalendarForm);
