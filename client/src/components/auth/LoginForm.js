import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { testcontext } from "../../contexts/AuthContext";
export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const { username, password } = loginForm;
  const { loginUser } = useContext(AuthContext);
  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    console.log(AuthContext);
    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            value={username}
            onChange={onChangeLoginForm}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="PassWord"
            name="password"
            value={password}
            onChange={onChangeLoginForm}
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Dont have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};