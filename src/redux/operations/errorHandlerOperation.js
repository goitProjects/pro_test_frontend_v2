import { refreshToken } from "./authOperations";
import {
  getUserError,
  loginError,
  logOutError,
  refreshError,
  registerError,
} from "../actions/authAction";

export const errorHandler =
  ({ error, cb, errType }) =>
  (dispatch, getState) => {
    console.log("errorHandler", errType);
    if (error.request?.status === 401) {
      cb && dispatch(refreshToken(cb));
    }
    switch (errType) {
      case getUserError:
        dispatch(getUserError(error.message));
        break;
      case registerError:
        dispatch(registerError(error.message));
        break;
      case loginError:
        dispatch(loginError(error.message));
      case logOutError:
        dispatch(logOutError(error.message));
      case getUserError:
        dispatch(getUserError(error.message));
      case refreshError:
        dispatch(refreshError(error.message));
      default:
        return;
    }
  };
