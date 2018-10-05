import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/container/Navbar/Navbar";
import Home from "./components/container/Home/Home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
