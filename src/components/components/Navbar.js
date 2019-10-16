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

        <div className="nav-item custom-text mx-auto my-auto d-block d-sm-block d-md-none mobile-custom-text">
          <NavLink className="nav-link" exact to="/">
            <div>LIBERTY</div>
          </NavLink>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mx-auto">
            <li className="nav-item custom-text mx-5 my-auto">
              <NavLink className="nav-link" exact to="/gallery">
                <div>GALLERI</div>
              </NavLink>
            </li>
            <li className="nav-item mx-5 my-auto d-sm-none d-md-block">
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
            <li className="nav-item custom-text mx-5 my-auto d-none d-sm-block d-md-none">
              <NavLink className="nav-link" exact to="/">
                FORSIDE
              </NavLink>
            </li>
            <li className="nav-item custom-text mx-5 my-auto">
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
