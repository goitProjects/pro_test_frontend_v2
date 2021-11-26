import { combineReducers, createReducer } from "@reduxjs/toolkit";
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
  refreshSuccess,
  refreshRequest,
  refreshError,
  logOutRequest,
  logOutSuccess,
  logOutError,
} from "../actions/authAction";

const initialUserState = {
  // accessToken: null,
  // refreshToken: null,
  // sid: null,
  userData: {
    email: null,
    id: null,
  },
};

const user = createReducer(initialUserState.userData, {
  [loginSuccess]: (_, { payload }) => payload.userData,
  [getUserSuccess]: (state, { payload: { email } }) => ({ ...state, email }),
  [logOutSuccess]: () => initialUserState.userData,
});

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logOutRequest]: () => true,
  [logOutSuccess]: () => false,
  [logOutError]: () => false,
  [getUserRequest]: () => true,
  [getUserSuccess]: () => false,
  [getUserError]: () => false,
  [refreshRequest]: () => true,
  [refreshSuccess]: () => false,
  [refreshError]: () => false,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.accessToken,
  [refreshSuccess]: (_, { payload }) => payload.newAccessToken,
  [logOutSuccess]: () => null,
});

const refreshToken = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.refreshToken,
  [refreshSuccess]: (_, { payload }) => payload.newRefreshToken,
  [logOutSuccess]: () => null,
});

const sid = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.sid,
  [refreshSuccess]: (_, { payload }) => payload.newSid,
  [logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getUserError]: (_, { payload }) => payload,
  [registerRequest]: () => null,
  [registerSuccess]: () => null,
  [loginRequest]: () => null,
  [loginSuccess]: () => null,
  [getUserRequest]: () => null,
  [getUserSuccess]: () => null,
  [refreshRequest]: () => null,
  [refreshSuccess]: () => null,
  [logOutRequest]: () => null,
  [logOutSuccess]: () => null,
});

const authReducer = combineReducers({
  user,
  token,
  refreshToken,
  sid,
  error,
  loading,
});

export { authReducer };
