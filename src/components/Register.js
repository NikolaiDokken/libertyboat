import React, { Component } from "react";
import Navbar from "./Navbar.js";

export default class Register extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar location={location} />
        <h2>Register</h2>
      </div>
    );
  }
}
