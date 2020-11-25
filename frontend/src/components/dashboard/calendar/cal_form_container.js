import { connect } from "react-redux";
import { createCalInvite } from "../../../util/user_util";
import CalendarForm from "./cal_form";


const mSTP = ({session: {user}, entities:{users}}) => {
  return {
    matches: Object.values(users).filter(el => el._id !== user.id),
    userId: user.id
  };
};

const mDTP = (dispatch) => {
  return {
    createCalInvite: inviteInfo => createCalInvite(inviteInfo)
  };
};

export default connect(mSTP, mDTP)(CalendarForm);
