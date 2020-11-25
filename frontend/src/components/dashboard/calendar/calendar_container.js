import DashboardCalendar from './calendar';
import { refreshLoggedInUserInfo } from '../../../actions/session_actions'
import { connect } from "react-redux";

const mSTP = (state) => {
  // debugger
  return {
    meetings: state.session.user.meetings
  };
};

const mDTP = (dispatch) => {
  return {
  };
};

export default connect(mSTP, mDTP)(DashboardCalendar);







