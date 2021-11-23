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
  accessToken: null,
  refreshToken: null,
  sid: null,
  userData: {
    email: null,
    id: null,
  },
};

const user = createReducer(
  { ...initialUserState },
  {
    [loginSuccess]: (_, { payload }) => payload,
    [getUserSuccess]: (_, { payload }) => payload,
    [refreshSuccess]: (state, { payload }) => ({
      ...state,
      accessToken: payload.newAccessToken,
      refreshToken: payload.newRefreshToken,
      sid: payload.newSid,
    }),
    [logOutSuccess]: (_, { payload }) => ({ ...initialUserState }),
  }
);

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
  [getUserSuccess]: (_, { payload }) => payload.accessToken,
  [refreshSuccess]: (_, { payload }) => payload.newAccessToken,
  [logOutSuccess]: (_, { payload }) => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getUserError]: (_, { payload }) => payload,
  [registerRequest]: (_, { payload }) => null,
  [registerSuccess]: (_, { payload }) => null,
  [loginRequest]: (_, { payload }) => null,
  [loginSuccess]: (_, { payload }) => null,
  [getUserRequest]: (_, { payload }) => null,
  [getUserSuccess]: (_, { payload }) => null,
  [refreshRequest]: (_, { payload }) => null,
  [refreshSuccess]: (_, { payload }) => null,
  [logOutRequest]: (_, { payload }) => null,
  [logOutSuccess]: (_, { payload }) => null,
});

const authReducer = combineReducers({
  user,
  token,
  error,
  loading,
});

export { authReducer };
