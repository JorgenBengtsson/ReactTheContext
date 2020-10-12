import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class LoginContext extends Component {
  constructor() {
    super();
    this.state = { user: "" };
  }
  setLogInUser = (userName) => this.setState({ user: userName });
  render() {
    return (
      <Provider
        value={{ user: this.state.user, setLogInUser: this.setLogInUser }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { LoginContext, Consumer as LoginContextConsumer };
