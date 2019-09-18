import types from "./types";

export const setCurrentUser = data => {
  console.log('set current User ACTIONS')
  return {
    type: types.SET_CURRENT_USER,
    data,
  };
};
export const setUserAuthenticated = payload => {
  console.log('set current User ACTIONS')
  return {
    type: types.SET_USER_AUTHENTICATED,
    payload,
  };
};
export default {
  setCurrentUser,
  setUserAuthenticated,
};