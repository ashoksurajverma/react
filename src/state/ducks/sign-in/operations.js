import actions from "./actions";
import { filter } from 'lodash';

const mockData = [
  { email: 'user@gmail.com', password: '123456789'},
  { email: 'user1@gmail.com', password: '123456789'}
];

const logIn = (data) => {
  debugger
  return async dispatch => {
    // dispatch(actions.increaseCounter());
    if(filter(mockData, data).length) {
      return true
    }
    return false;
  };
};

export default {
  logIn
};
