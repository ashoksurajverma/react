import React, { Component } from "react";
import { connect } from "react-redux";

import { signInOperations } from "../../../state/ducks/sign-in";
import SignInForm from '../../components/sign-in'
import "./index.css";

class SignIn extends Component {
  handleSubmit = signInData => {
    const { signIn } = this.props;
    signIn(signInData).then(data => {
      debugger
      if (data) {
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SignInForm onSubmit={this.handleSubmit}/>
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
