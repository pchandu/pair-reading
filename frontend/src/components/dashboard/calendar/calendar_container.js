import { connect } from "react-redux";
import DashboardCalendar from './calendar';

const mSTP = (state) => {
  debugger;
  return {
    meetings: state.session.user.meetings
  };
};

const mDTP = (dispatch) => {
  return {

  };
};

export default connect(mSTP, mDTP)(DashboardCalendar);







