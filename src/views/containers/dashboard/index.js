import React, { Component } from "react";
import './index.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col md 2 side-nav-bar">
            <a href="#">Product</a> <br/>
            <a href="#">Add Product</a>
          </div>
          <div className="col md 10">
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
