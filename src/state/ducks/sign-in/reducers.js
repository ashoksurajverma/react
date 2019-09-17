import { combineReducers } from "redux";
import types  from './types';

const initialState = {
  currentUser: []
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      console.log("setCurrentUser REDUCERS");
      return Object.assign({}, state, {
        currentUser: action.data,
      });

    default:
      return state;
  }
};

const signInReducer = combineReducers({
  signIn
});

export default signInReducer;
