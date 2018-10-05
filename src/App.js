import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/container/Navbar/Navbar";
//Configure the routes by importing the default export from the routes.js file,
//Then delete the Home component, and put the routes underneath the nav.
import routes from "./routes";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

//THen connect your app to your reducer.
export default withRouter(App);
