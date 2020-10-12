import React, { Component } from "react";
import { LoginContextConsumer } from "./../context/loginContext";

export default class Body extends Component {
  render() {
    return (
      <LoginContextConsumer>
        {(context) => <div>Welcome {context.user}</div>}
      </LoginContextConsumer>
    );
  }
}
