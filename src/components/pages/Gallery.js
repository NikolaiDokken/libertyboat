import React, { Component } from "react";
import Navbar from "../components/Navbar.js";

export default class Home extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar location={location} />
        <h2>Båtens galleri</h2>
      </div>
    );
  }
}
