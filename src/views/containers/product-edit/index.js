import React, { Component } from "react";
import ProductEditForm from "../../components/product-edit";

import "./index.css";

class ProductEdit extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Product Edit: </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductEditForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductEdit;
