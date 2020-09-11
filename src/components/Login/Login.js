import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://emergent-enterprise.com/wp-content/uploads/2019/01/slacklogo-620x350.png"
          alt=""
        />
        <h1>Sign in to Soo's Slack</h1>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
};

export default Login;
