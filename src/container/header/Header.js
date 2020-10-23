import React, { Component } from "react";
import Slider from "./Slider";
import Topbar from "./Topbar";

class Header extends Component {
  render() {
    return (
      <header id="home" className="header-styles">
        <Topbar />
        <Slider />
      </header>
    );
  }
}

export default Header;
