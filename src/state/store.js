import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from "./ducks"; // import all reducers from ducks/index.js
const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));


export default store;