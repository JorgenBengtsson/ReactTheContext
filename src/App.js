import React, { Component } from "react";

import { SimpleExample } from "./simpleExample/simpleExample";

export default class App extends Component {
  render() {
    return <SimpleExample />;
  }
}

/*
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
*/
