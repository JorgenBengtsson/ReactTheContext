import React, { Component } from "react";

import { LoginContextConsumer } from "./../context/loginContext";

export default class LoginButton extends Component {
  render() {
    return (
      <LoginContextConsumer>
        {(context) => (
          <button onClick={() => context.setLogInUser("Kalle")}>Login</button>
        )}
      </LoginContextConsumer>
    );
  }
}
