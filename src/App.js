import React, { Component } from "react";
import "./App.css";
import Body from "./components/body/body";
import { LoginContext } from "./components/context/loginContext";
import Header from "./components/header/header";

export default class App extends Component {
  render() {
    return (
      <LoginContext>
        <Header />
        <Body />
      </LoginContext>
    );
  }
}
