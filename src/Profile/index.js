import "./index.css";
import React, { Component } from "react";
import Signout from "../Firebase/Components/Signout";

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <Signout />
      </div>
    );
  }
}
