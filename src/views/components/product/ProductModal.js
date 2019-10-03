import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
        <p>Are you sure want to delete this Product.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteProductModal;