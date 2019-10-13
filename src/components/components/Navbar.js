import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-md navbar-light sticky-top bg-custom"
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
          <ul class="nav navbar-nav mx-auto">
            <li class="nav-item custom-text">
              <NavLink className="nav-link" exact to="/gallery">
                <div>GALLERI</div>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active-img"
                exact
                to="/"
              >
                <img class="boat-logo" src="./resources/logo.png" alt=""></img>
              </NavLink>
            </li>
            <li class="nav-item custom-text">
              <NavLink className="nav-link" exact to="/history">
                HISTORIKK
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
