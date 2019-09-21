import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
import { signInState } from "./ducks"; // import all reducers from ducks/index.js
import { signUpState } from "./ducks"; // import all reducers from ducks/index.js
const rootReducer = combineReducers({
    signIn: signInState,
    signUp: signUpState,
    form: formReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));


export default store;