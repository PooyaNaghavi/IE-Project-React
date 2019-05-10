import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import logoPic from "./assets/logo/logo v1.png";

class Header extends Component<Props, State> {
  render() {
    return (
      <div className="header white">
        <div className="col-1 dummy" />
        <Link to="/">
          <img className="header-logo" src={logoPic} alt="جاب‌اونجا" />
        </Link>
        <div id="spacer" className="header-spacer" />
        <Link to={`/user?id=${localStorage.getItem('userId')}`} id="header-account" className="header-item">
          حساب کاربری
        </Link>
        <Link
          onClick={e => this.clickOnExitLink(e)}
          to="/login"
          id="header-exit"
          className="header-item"
        >
          خروج
        </Link>
        <div className="col-1 dummy" />
      </div>
    );
  }
  clickOnExitLink(e: React.FormEvent<HTMLAnchorElement>): void {
    localStorage.removeItem("JWT");
  }
}

export default Header;

interface Props { }
interface State { }
