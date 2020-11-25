import { connect } from "react-redux";
import CalendarForm from "./cal_form";

const mSTP = ({session: {user}, entities:{users}}) => {
  return {
    matches: Object.values(users).filter(el => el._id !== user.id),
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(CalendarForm);
