import React, { Component } from "react";
import LoginButton from "../loginButton/loginButton";

export default class Header extends Component {
  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <p>THE SITE</p>
        <LoginButton />
      </div>
    );
  }
}
