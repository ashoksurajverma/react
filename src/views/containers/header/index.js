import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { signInOperations } from "../../../state/ducks/sign-in";

import "./index.css";

class Header extends Component {
  logout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { isUserAuthenticated } = this.props;
    return (
      <Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">MyProject Name</Navbar.Brand>
          {!isUserAuthenticated && (
            <Nav className="mr-auto">
              <Link className="header-link" to="/">
                Sign In
              </Link>
              <Link className="header-link" to="/sign-up">
                Sign Up
              </Link>
              <Link className="header-link" to="/product-add">
                Add Product
              </Link>
              <Link className="header-link" to="/product-list">
                Product List
              </Link>
            </Nav>
          )}
          {isUserAuthenticated && (
            <Nav className="mr-auto">
              <Link className="header-link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="header-link" to="#" onClick={this.logout}>
                Log Out
              </Link>
            </Nav>
          )}
        </Navbar>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserAuthenticated: state.signIn.signIn.isUserAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(signInOperations.logOut())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
