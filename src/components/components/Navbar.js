import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top bg-custom"
        role="navigation"
      >
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mx-auto">
            <li className="nav-item custom-text">
              <NavLink className="nav-link" exact to="/gallery">
                <div>GALLERI</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <div>
                <NavLink
                  className="nav-link"
                  activeClassName="active-img"
                  exact
                  to="/"
                >
                  <img
                    className="boat-logo"
                    src="./resources/logo.png"
                    alt=""
                  ></img>
                </NavLink>
              </div>
            </li>
            <li className="nav-item custom-text">
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
