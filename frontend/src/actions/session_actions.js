import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const UPDATE_USER_PREFERENCES = "UPDATE_USER_PREFERENCES"

export const GET_UPDATE_USER_INFO = "GET_UPDATE_USER_INFO";


export const USER_FOLLOW_BOOK = "USER_FOLLOW_BOOK";

// Retrieves user info from backed and returns OBJ of updated info
export const updatedUserInfo = payload => ({
  type: GET_UPDATE_USER_INFO,
  payload
})

export const updateUserPreferences = payload => ({
  type: UPDATE_USER_PREFERENCES,
  payload
});
// We'll dispatch this when our user signs in
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

// This will be used to redirect the user to the login page upon signup
export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN,
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

//updates user info to add a book!
export const userFollowBook = (payload) => ({
  type: USER_FOLLOW_BOOK,
  payload,
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    () => dispatch(receiveUserSignIn()),
    (err) => dispatch(receiveErrors(err.response.data))
  );

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(receiveErrors(err.response.data));
    });

// We wrote this one earlier
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};

export const updatePreferences = (updatedUser) => dispatch => {
  APIUtil.updateUser(updatedUser);
}

export const refreshLoggedInUserInfo = (loggedInUser) => dispatch => {
  APIUtil.refreshUserInfo(loggedInUser)
    .then(userInfo => dispatch(updatedUserInfo(userInfo)))
}

export const recieveUserFollowBook = (updatedUser) => (dispatch) => {
  APIUtil.userFollowBook(updatedUser);
};