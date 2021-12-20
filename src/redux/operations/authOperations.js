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
import { errorHandler } from "./errorHandlerOperation";

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const user = await postRegister(credentials);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(
      errorHandler({
        error,
        errAction: registerError,
        cb: () => register(credentials),
      })
    );
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await postSignInUser(credentials);

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(
      errorHandler({
        error,
        errAction: loginError,
        cb: logIn(credentials),
      })
    );
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logOutRequest());
  try {
    await postLogoutUser();

    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(
      errorHandler({
        error,
        errAction: logOutError,
        cb: logOut,
      })
    );
  }
  // добавить finally с принудительным логаутом
};

const getUserGoogle = (tokenData) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    let data = {};
    const user = await getUser(tokenData.accessToken);
    data = { userData: user, ...tokenData };
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(
      errorHandler({
        error,
        errAction: getUserError,
        cb: () => getUserGoogle(tokenData),
      })
    );
  }
};

const refreshToken = (cb) => async (dispatch, getState) => {
  const {
    auth: { refreshToken, sid },
  } = getState();

  if (refreshToken) {
    dispatch(refreshRequest());
    try {
      const data = await postRefreshUser(refreshToken, sid);
      dispatch(refreshSuccess(data));

      dispatch(cb());
    } catch (error) {
      dispatch(
        errorHandler({
          error,
          errAction: refreshError,
          cb: null,
        })
      );
      dispatch(logOutSuccess());
    }
  } else {
    dispatch(logOutSuccess());
  }
};

const getCurUser = () => async (dispatch, getState) => {
  dispatch(getUserRequest());
  const {
    auth: { token },
  } = getState();

  try {
    const data = await getUser(token);
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(
      errorHandler({
        error,
        errAction: getUserError,
        cb: getCurUser,
      })
    );
  }
};

export { register, logIn, getUserGoogle, refreshToken, logOut, getCurUser };
