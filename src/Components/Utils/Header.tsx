import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

import logoPic from './assets/logo/logo v1.png';

class Header extends Component<Props, State>{
  render() {
    return (
      <div className="header white">
        <div className="col-1 dummy"></div>
        <Link to="/">
          <img className="header-logo" src={logoPic} alt="جاب‌اونجا" />
        </Link>
        <div id="spacer" className="header-spacer"></div>
        <Link to="/user?id=1" id="header-account" className="header-item">حساب کاربری</Link>
        <div id="header-exit" className="header-item">خروج</div>
        <div className="col-1 dummy"></div>
      </div>
    );
  }
}


export default Header;

interface Props { }
interface State { }