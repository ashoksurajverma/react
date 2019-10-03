import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import './index.css';

import DeleteProductModal from './ProductModal';

class Product extends Component {
  state = {
    modalShow: false,
  }

  setModalShow = (value) => {
    this.setState({
      modalShow: value,
    });
  }

  handleEdit = () => {
    const { history: { push }} = this.props;
    // push('/product-edit')
    push({
      pathname: '/product-edit',
      state: {
        productTitle: 'product title',
        description: 'this is the description of product'
      }
    })
  }

  render() {
    const { modalShow } = this.state;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="apples.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="margin-right" onClick={() => this.handleEdit()}>Edit</Button>
            <Button variant="primary" onClick={() => this.setModalShow(true)}>Delete</Button>
          </Card.Body>
        </Card>
        <DeleteProductModal
          show={modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </div>
    );
  }
}

export default withRouter(Product);