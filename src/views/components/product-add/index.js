import React from "react";
import { Field, reduxForm } from "redux-form";

const renderTextArea = ({ input, meta: { touched, error, warning } }) => (
  <div>
    <label>Product Description</label>
    <div>
      <textarea {...input} placeholder="Content" rows="10" cols="40" />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const ProductAddForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Product Title</label>
        <Field
          name="productTitle"
          component="input"
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <Field name="description" component={renderTextArea} />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({ form: "ProductAddForm" })(ProductAddForm);
