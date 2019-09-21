import React from "react";
import { Field, reduxForm } from "redux-form";

const SignInForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
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

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: "signInForm" })(SignInForm);
