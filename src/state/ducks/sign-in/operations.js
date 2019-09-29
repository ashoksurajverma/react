import axios from 'axios';
import qs from 'qs';
import actions from "./actions";
import { filter } from "lodash";

const mockData = [
  { email: "user@gmail.com", password: "123456789" },
  { email: "user1@gmail.com", password: "123456789" }
];

const logIn = data => {
  debugger
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }
  
  const requestBody = {
    user_object: {
      email: 'avatar@gmail.com',
      password: 'test123'
    }
  }
  return async dispatch => {
    // dispatch(actions.increaseCounter());
    // if (filter(mockData, data).length) {
    //   dispatch(actions.setUserAuthenticated(true));
    //   return true;
    // }
    // return false;
    // fetch('http://avatartechworld.com/rest/auth/org_login', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'mode': 'no-cors'
    //   },
    //   body: requestBody
    // }).then((response) => {
    //   debugger
    // })
    // .catch((error) => {
    //   debugger
    // })
    const url = 'http://avatartechworld.com/rest/auth/org_login';

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(requestBody),
      url
    }
    axios(options).then((res) => {
      // debugger
    })
    .catch(error => {
      // debugger
    })
    // axios.post('http://avatartechworld.com/rest/auth/org_login', config, qs.stringify(requestBody))
    // .then(function (response) {
    //   debugger
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   debugger
    //   // handle error
    //   console.log(error);
    // })
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
