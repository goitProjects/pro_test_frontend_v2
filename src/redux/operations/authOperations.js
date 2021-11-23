import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  logOutRequest,
  logOutSuccess,
  logOutError,
} from "../actions/authAction";
import {
  postRegister,
  postSignInUser,
  postRefreshUser,
  getUser,
  postLogoutUser,
} from "../../servises/reqToApi";

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const user = await postRegister(credentials);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await postSignInUser(credentials);

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logOutRequest());
  try {
    await postLogoutUser();

    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error));
  }
};

const getUserGoogle = (tokenData) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    let data = {};
    const user = await getUser(tokenData.accessToken);
    data = { userData: user, ...tokenData };
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError(error));
  }
};

const refreshToken = (credentials) => async (dispatch, getState) => {
  const {
    auth: { user: refreshUser },
  } = getState();

  if (refreshUser.refreshToken) {
    dispatch(refreshRequest());
    try {
      const user = await postRefreshUser(
        refreshUser.refreshToken,
        refreshUser.sid
      );
      dispatch(refreshSuccess(user));
    } catch (error) {
      dispatch(refreshError(error));
    }
  }
};

export { register, logIn, getUserGoogle, refreshToken, logOut };
