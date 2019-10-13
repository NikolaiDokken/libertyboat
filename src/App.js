import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import History from "./components/pages/History";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/gallery" component={Gallery} />
      </HashRouter>
    );
  }
}

export default App;
