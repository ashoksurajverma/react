import React, { Component } from "react";
import Product from '../../components/product';

import "./index.css";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-06">
            <div>
              <Product />
            </div>
          </div>
          <div className="col-md-06">
            <div>
              <Product />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
