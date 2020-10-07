import React, { Component } from "react";

export default class GoogleLogin extends Component {
  login = () => {
    //Hnadle google login
  };
  render() {
    return (
      <div>
        <button onClick={this.login}>Google</button>
      </div>
    );
  }
}
