import React, { Component } from "react";
import "../styles/stylesheet.css";
import Navbar from "./Navbar.js";

export default class Home extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="home-container">
        <Navbar location={location} />
        <h2>Her kommer home og nyhetssaker</h2>
      </div>
    );
  }
}
