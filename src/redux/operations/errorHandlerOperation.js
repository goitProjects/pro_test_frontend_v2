import { refreshToken } from "./authOperations";

export const errorHandler =
  ({ error, cb, errAction }) =>
  (dispatch) => {
    if (error.request?.status === 401) {
      cb && dispatch(refreshToken(cb));
    }

    const { message } = error;

    dispatch(errAction(message));
  };
