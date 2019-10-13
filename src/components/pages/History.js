import React, { Component } from "react";
import Navbar from "../components/Navbar.js";

export default class Register extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar location={location} />
        <h2>Båtens historikk</h2>
      </div>
    );
  }
}
