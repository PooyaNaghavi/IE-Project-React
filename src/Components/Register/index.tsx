import React, { Component } from 'react';
import './style.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';

class index extends Component {
  render() {
    return (
        <div>
            <form className="register-form" action="index.html" method="POST">
                <h1 className="register-header">ثبت‌نام</h1>
                
                <legend className="header-name"><span className="number">۱ </span> اطلاعات پایه </legend>
                <fieldset>
                    <input className="box-style" type="text" id="firstname" name="user_firstname" placeholder="نام"/>
                    <input className="box-style" type="text" id="lastname" name="user_lastname" placeholder="نام خانوادگی"/>
                    <input className="box-style" type="text" id="username" name="user_username" placeholder="نام کابردی"/>
                    <input className="box-style" type="password" id="password" name="user_password" placeholder="کلمه‌ی عبور"/>
                    <input className="box-style" type="password" id="dupPassword" name="user_dupPassword" placeholder="تکرار کلمه‌ی عبور"/>
                </fieldset>
                <legend className="header-name" ><span className="number">۲</span> پروفایل </legend>
                <fieldset>
                    <input className="box-style" type="text" id="jobTitle" name="user_jobTitle" placeholder="عنوان شغلی"/>
                    <input className="box-style" type="text" id="profileUrl" name="user_profileUrl" placeholder="لینک عکس پروفایل"/>
                    <textarea className="box-style bio-box-style" id="bio" name="user_bio" placeholder="بیو"></textarea>
                </fieldset>
                <fieldset>
                </fieldset>
                <button className="button" type="submit">ثبت‌نام</button>
            </form>
    </div>
    );
  }
}

export default index;
