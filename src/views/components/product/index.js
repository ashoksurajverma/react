import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Product extends Component {
  render() {
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
            <Button variant="primary">Edit</Button>
            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Product;
