import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegisterForm = ({ authRouter }) => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="PassWord"
            name="password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Retype PassWord"
            name="retypepassword"
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
        <p>
          Already have an account?
          <Link to="/login">
            <Button variant="info" size="sm" className="ml-2">
              Login
            </Button>
          </Link>
        </p>
      </Form>
    </>
  );
};

export default RegisterForm;
