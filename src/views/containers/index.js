import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import NotFoundPage from './not-found-page';
import Header from './header';
import Dashboard from './dashboard';
import ProductList from './products-list';
import ProductEdit from './product-edit';
import ProductAdd from './product-add';

// import Footer from './footer';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product-edit" component={ProductEdit} />
        <Route path="/product-add" component={ProductAdd} />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
