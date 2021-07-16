import React from "react";
import { LoginForm } from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
  let body;
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
