import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
  GET_UPDATE_USER_INFO,
  USER_FOLLOW_BOOK
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };
    case GET_UPDATE_USER_INFO:
      return Object.assign({}, state, { user: action.payload.data });
    case USER_FOLLOW_BOOK:
      return Object.assign({}, state, { user: action.payload.data });
    default:
      return state;
  }
}

export default sessionReducer;
