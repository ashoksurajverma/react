import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import NotFoundPage from './not-found-page';
import Header from './header';
// import Footer from './footer';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
