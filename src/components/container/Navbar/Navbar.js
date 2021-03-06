import React, { Component } from "react";
import "./Navbar.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  state = {};

  //Define your linkFunc so it will redirect to specified route provided via argument.
  linkFunc(path) {
    this.props.history.push(path);
  }
  logout = () => {
    //Pass a empty since you are just logging out the user.
    axios
      .post("/api/logout", {})
      .then(res => {
        //The will logout a user
        alert(res.data.message);
        //Reload the browser using this.props.history.go();
        this.props.history.go();
      })
      .catch(err => console.log("Logout Axios Error-------", err));
  };
  login = () => {
    //Define your encodedURi since your are dealing with oAuth, so it can be secure, and oAuth and decode it.
    //Have your location origin, with your auth0 proxy which will be auth/calllback
    const redirectURI = encodeURIComponent(
      `${window.location.origin}/auth/callback`
    );
    //Redirect the user to your Auth0 domain, with the correct query parameters to retrieve code from auth0.
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/login?client=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectURI}`;
  };

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
          {/* Conditionally render the login button based if the user has data(it's login) else logout */}
          {/* Conditional render the user image if logged in. */}
          <div
            className="nav-link"
            onClick={() => (this.props.user ? this.logout() : this.login())}
          >
            {this.props.user ? (
              <div>
                <p>Logout</p>
                <img
                  className="user-image"
                  src={this.props.user.profile_picture}
                  alt={this.props.user.nickname}
                />
              </div>
            ) : (
              <p>Login</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);
