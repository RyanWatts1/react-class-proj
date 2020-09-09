import React, { Component } from "react";
import "./App.css";

import PasswordCard from "./PasswordCard/PasswordCard";
import PasswordInput from "./PasswordInput/PasswordInput";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Ryan123",
    password: "Catwalker1!",
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordChangedHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <ol>
          <p>Smart Travel</p>
        </ol>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <PasswordCard
          changed={this.passwordChangedHandler}
          currentPassword={this.state.password}
        />
        <PasswordInput passwordInput={this.state.password} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Sheila " />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;
