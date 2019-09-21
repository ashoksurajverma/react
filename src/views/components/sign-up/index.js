import React from "react";
import { Field, reduxForm } from "redux-form";

const SignUpForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fName">First Name</label>
        <Field
          name="fName"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lName">Last Name</label>
        <Field
          name="lName"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileNo">Mobile Number</label>
        <Field
          name="mobileNo"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <Field
          name="email"
          component="input"
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component="input"
          type="password"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field
          name="confirmPassword"
          component="input"
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({ form: "signUpForm" })(SignUpForm);
