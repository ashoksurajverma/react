import React, { Component } from "react";
import ProductAddForm from "../../components/product-add";

import "./index.css";

class ProductAdd extends Component {
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
