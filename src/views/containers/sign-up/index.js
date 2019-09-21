import React, { Component } from "react";
import { connect } from "react-redux";

import { signUpOperations } from "../../../state/ducks/sign-up";
import SignUpForm from '../../components/sign-up';

import "./index.css";

class SignUp extends Component {
  handleSubmit = signUpData => {
    const { signUp } = this.props;
    signUp(signUpData).then(data => {
      if (data) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SignUpForm onSubmit={this.handleSubmit}/>
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
