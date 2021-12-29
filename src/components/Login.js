import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then()
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="../slack_logo.png" alt="SLACK LOGO" />
        <h1>Sign in to Lovely Programmer</h1>
        <p>lovelyprogrammer.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
