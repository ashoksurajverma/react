import actions from "./actions";
import { filter } from "lodash";

const mockData = [
  { email: "user@gmail.com", password: "123456789" },
  { email: "user1@gmail.com", password: "123456789" }
];

const logIn = data => {
  return async dispatch => {
    // dispatch(actions.increaseCounter());
    if (filter(mockData, data).length) {
      dispatch(actions.setUserAuthenticated(true));
      return true;
    }
    return false;
  };
};
const logOut = () => {
  return dispatch => {
    // dispatch(actions.increaseCounter());
    dispatch(actions.setUserAuthenticated(false));
  };
};
export default {
  logIn,
  logOut
};
