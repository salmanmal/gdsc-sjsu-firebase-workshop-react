import React, { Component } from "react";

export default class Signout extends Component {
  signout = () => {
    //Handle signout
  };
  render() {
    return (
      <div>
        <button onClick={this.signout}>Signout</button>
      </div>
    );
  }
}
