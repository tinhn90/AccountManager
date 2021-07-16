import React from "react";
import { LoginForm } from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";

const Auth = ({ authRoute }) => {
  let body;

  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animations="boder" variant="info"></Spinner>
      </div>
    );
  } else if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else
    body = (
      <>
        Account Manager
        {authRoute === "login" && <LoginForm></LoginForm>}
        {authRoute === "register" && <RegisterForm></RegisterForm>}
      </>
    );
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Account Manager</h1>
          <h1>Keep track what you invest</h1>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
