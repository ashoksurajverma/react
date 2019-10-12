import React, { Component } from "react";
import ProductAddForm from "../../components/product-add";

import "./index.css";

class ProductAdd extends Component {
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
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Add product: </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductAddForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAdd;
