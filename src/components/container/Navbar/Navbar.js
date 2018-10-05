import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="nav container">
        <div className="desktop-nav">
          <p className="nav-link">Home</p>
          <p className="nav-link">About</p>
          <p className="nav-link">Cart</p>
          <p className="nav-link">Login</p>
        </div>
      </div>
    );
  }
}
export default Navbar;
