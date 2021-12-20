const getAuthError = (state) => {
  return state.auth.error;
};

const getIsAuth = (state) => !!state.auth.token;
const getUserData = (state) => state.auth.user;

export { getAuthError, getIsAuth, getUserData };
