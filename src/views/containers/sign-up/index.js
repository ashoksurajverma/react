import React, { Component } from "react";
import { connect } from "react-redux";

import { signUpOperations } from "../../../state/ducks/sign-up";

import "./index.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      mobileNo: "",
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  handlechange = event => {
    const { errorMessage } = this.state;
    if (errorMessage) {
      this.setState({ errorMessage: "" });
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, fName, lName, mobileNo } = this.state;
    const { signUp } = this.props;
    signUp({
      email,
      password,
      fName,
      lName,
      mobileNo
    }).then(data => {
      this.setState({
        fName: "",
        lName: "",
        mobileNo: "",
        email: "",
        password: "",
        errorMessage: ""
      });
      if (data) {
        this.props.history.push("/");
      } else {
        this.setState({
          errorMessage: "Sorry, can't signup, try again later!!!"
        });
      }
    });
  };

  shouldDisable = () => {
    const { fName, lName, email, password, mobileNo } = this.state;
    return (
      fName === "" ||
      lName === "" ||
      email === "" ||
      password === "" ||
      mobileNo === ""
    );
  };

  render() {
    const {
      fName,
      lName,
      mobileNo,
      email,
      password,
      errorMessage
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputFirstName">First Name</label>
                <input
                  name="fName"
                  type="text"
                  className="form-control"
                  id="fName"
                  placeholder="Enter first Name"
                  value={fName}
                  onChange={this.handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputLastName">Last Name</label>
                <input
                  name="lName"
                  type="text"
                  className="form-control"
                  id="lName"
                  placeholder="Enter last name"
                  value={lName}
                  onChange={this.handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                <input
                  name="mobileNo"
                  type="text"
                  className="form-control"
                  id="mobileNo"
                  placeholder="Enter mobile number"
                  value={mobileNo}
                  onChange={this.handlechange}
                  maxLength="10"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handlechange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handlechange}
                />
              </div>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.shouldDisable()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    signUp: data => dispatch(signUpOperations.signUp(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
