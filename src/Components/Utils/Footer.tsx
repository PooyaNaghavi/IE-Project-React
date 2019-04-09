import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component <Props, State>{
  render() {
    return (
        <div className="row footer-color">
        <div className="col-1 dummy"></div>
        <div className="col-10">
            <div id="footer">
                <div className="footer-text">
                    © تمامی حقوق این سایت متعلق به جاب‌اونجا می‌باشد
                </div>
            </div>
        </div>
        <div className="col-1 dummy"></div>
    </div>
    );
  }
}

export default Footer;

interface Props{}
interface State{}