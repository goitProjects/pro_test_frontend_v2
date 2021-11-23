import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logOutRequest = createAction("auth/logOutRequest");
const logOutSuccess = createAction("auth/logOutSuccess");
const logOutError = createAction("auth/logOutError");

const getUserRequest = createAction("auth/getUserRequest");
const getUserSuccess = createAction("auth/getUserSuccess");
const getUserError = createAction("auth/getUserError");

const refreshRequest = createAction("auth/refreshRequest");
const refreshSuccess = createAction("auth/refreshSuccess");
const refreshError = createAction("auth/refreshError");

export {
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
};
