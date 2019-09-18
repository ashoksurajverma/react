import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap';
import './index.css'

export default class Header extends Component {
  render() {
    return (
        <Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">MyProject Name</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="header-link" to="/">Sign In</Link>
            <Link className="header-link" to="/sign-up">Sign Up</Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}
