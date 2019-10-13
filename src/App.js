import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import "./styles/stylesheet.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  <Home />
                </Link>
              </li>
              <li>
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </Navbar>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
