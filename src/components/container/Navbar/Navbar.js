import React, { Component } from "react";
import "./Navbar.css";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {};

  //Define your linkFunc so it will redirect to specified route provided via argument.
  linkFunc(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="nav container">
        <div className="desktop-nav">
          {/* Make sure every link uses linkFunc, except the login link. s*/}
          <p className="nav-link" onClick={() => this.linkFunc("/")}>
            Home
          </p>
          <p className="nav-link" onClick={() => this.linkFunc("/about")}>
            About
          </p>
          <p className="nav-link" onClick={() => this.linkFunc("/cart")}>
            Cart
          </p>
          <p className="nav-link">Login</p>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);
