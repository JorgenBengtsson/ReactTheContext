import React, { Component } from "react";

const ThemeContext = React.createContext();

class SimpleExample extends Component {
  render() {
    return (
      <ThemeContext.Provider value="Light">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <Theme />
    </div>
  );
}

class Theme extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <span>{this.context}</span>;
  }
}

export { SimpleExample };
