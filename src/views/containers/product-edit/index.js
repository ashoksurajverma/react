import React, { Component } from "react";
import ProductEditForm from "../../components/product-edit";

import "./index.css";

class ProductEdit extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    const data = this.props.location.state;
    if(data) {
      debugger
      this.setState({
        data
      });
    }
  }

  render() {
    console.log("========================", this.state.data);
    const { data } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Product Edit: </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductEditForm data={data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductEdit;
