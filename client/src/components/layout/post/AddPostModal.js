import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";

const AddPostModal = () => {
  //Contexts
  const { showAddPostModal, setShowAddPostModal } = useContext(PostContext);

  return (
    <Modal show={showAddPostModal} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Balance</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
            ></Form.Control>
            <Form.Text id="title-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="description"
              name="description"
              rows="3"
              required
              aria-describedby="description-help"
            ></Form.Control>
            <Form.Text id="description-help" muted>
              Required
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            {" "}
            Add!
          </Button>
          <Button variant="secondary">Cancel</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPostModal;
