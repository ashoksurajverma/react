import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import DropZoneField from '../dropzone';

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

class ProductAddForm extends Component {
  state = { imageFile: [] };

  handleFormSubmit = formProps => {
    const fd = new FormData();
    fd.append("imageFile", formProps.imageToUpload.file);
    // append any additional Redux form fields
    // create an AJAX request here with the created formData

    alert(JSON.stringify(formProps, null, 4));
  };

  handleOnDrop = (newImageFile, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size
    };

    this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
  };

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());

  render() {
    const { handleSubmit } = this.props;
    return(
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
      <div>
        <Field
          name="imageToUpload"
          component={DropZoneField}
          type="file"
          imagefile={this.state.imageFile}
          handleOnDrop={this.handleOnDrop}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
    )
  }
}
export default reduxForm({ form: "ProductAddForm" })(ProductAddForm);
