import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Card, Button, Modal } from "react-bootstrap";

function DeleteProductModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete the Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure want to delete this Product.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
    push('/product-edit')
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
            <Button variant="primary" onClick={() => this.handleEdit()}>Edit</Button>
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