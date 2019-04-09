import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

import logoPic from './assets/logo/logo v1.png';

class Header extends Component <Props, State>{
  render() {
    return (
      <div className="row white">
      <div className="col-1 dummy"></div>
      <div className="col-10">
          <div id="header">
            <div id="header-logo">
              <Link to="/home">
                <img className="logo" src={logoPic} alt="جاب‌اونجا"/>
              </Link>
            </div>
            <div id="header-spacer" className="spacer"></div>
            <Link to="/user" id="header-account" className="header-item">حساب کاربری</Link>
            <div id="header-exit" className="header-item">خروج</div>
          </div>
          </div>
          <div className="col-1 dummy"></div>
      </div>
    );
  }
}

export default Header;

interface Props{}
interface State{}