import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-md navbar-dark sticky-top bg-custom"
        role="navigation"
      >
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/">
                Forside
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
