import React, { Component } from "react";
import { connect } from "react-redux";
import { signInOperations } from "../../../state/ducks/sign-in";

import "./index.css";
import { sign } from "crypto";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
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
    const { email, password } = this.state;
    const { signIn } = this.props;
    signIn({ email, password }).then(data => {
      this.setState({
        email: "",
        password: ""
      });
      if (data) {
        this.props.history.push("/dashboard");
      } else {
        this.setState({ errorMessage: "Email and password are not correct" });
      }
    });
  };

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
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
                disabled={email === "" || password === ""}
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
    signIn: data => dispatch(signInOperations.logIn(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
