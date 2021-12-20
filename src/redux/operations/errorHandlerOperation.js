import { refreshToken } from "./authOperations";
import {
  getUserError,
  loginError,
  logOutError,
  refreshError,
  registerError,
} from "../actions/authAction";
import { test_Error } from "../actions/testAction";

export const errorHandler =
  ({ error, cb, errAction }) =>
  (dispatch) => {
    if (error.request?.status === 401) {
      cb && dispatch(refreshToken(cb));
    }

    const { message } = error;

    dispatch(errAction(message));

    

    // switch (errType) {
    //   case getUserError:
    //     dispatch(getUserError(message));
    //     break;
    //   case registerError:
    //     dispatch(registerError(message));
    //     break;
    //   case loginError:
    //     dispatch(loginError(message));
    //   case logOutError:
    //     dispatch(logOutError(message));
    //   case getUserError:
    //     dispatch(getUserError(message));
    //   case refreshError:
    //     dispatch(refreshError(message));
    //   case test_Error:
    //     dispatch(test_Error(message));
    //   default:
    //     return;
    // }
  };
