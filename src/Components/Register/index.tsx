import React, { Component } from "react";
import "./style.css";
import Footer from "../Utils/Footer";
import Header from "../Utils/Header";
import axios from "axios";
import Popup from "reactjs-popup";
import { Redirect } from "react-router";

class index extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      dupPassword: "",
      jobTitle: "",
      profilePicURL: "",
      bio: "",
      status: "register",
      errorValue: ""
    };
  }

  render() {
    return this.state.status === "logged-in" ? (
      <Redirect to="/home" />
    ) : (
      <div>
        <form
          onSubmit={e => this.submitRegisterFrom(e)}
          className="register-form"
          action="register"
          method="POST"
        >
          <h1 className="register-header">ثبت‌نام</h1>

          <legend className="header-name">
            <span className="number">۱ </span> اطلاعات پایه{" "}
          </legend>
          <fieldset>
            <input
              onChange={e => this.handleFirstNameInputChange(e)}
              className="box-style"
              type="text"
              id="firstname"
              name="user_firstname"
              placeholder="نام"
              value={this.state.firstName}
            />
            <input
              onChange={e => this.handleLastNameInputChange(e)}
              className="box-style"
              type="text"
              id="lastname"
              name="user_lastname"
              placeholder="نام خانوادگی"
              value={this.state.lastName}
            />
            <input
              onChange={e => this.handleUserNameInputChange(e)}
              className="box-style"
              type="text"
              id="username"
              name="user_username"
              placeholder="نام کابردی"
              value={this.state.userName}
            />
            <input
              onChange={e => this.handlePasswordInputChange(e)}
              className="box-style"
              type="password"
              id="password"
              name="user_password"
              placeholder="کلمه‌ی عبور"
              value={this.state.password}
            />
            <input
              onChange={e => this.handleDupPasswordInputChange(e)}
              className="box-style"
              type="password"
              id="dupPassword"
              name="user_dupPassword"
              placeholder="تکرار کلمه‌ی عبور"
              value={this.state.dupPassword}
            />
          </fieldset>
          <legend className="header-name">
            <span className="number">۲</span> پروفایل{" "}
          </legend>
          <fieldset>
            <input
              onChange={e => this.handleJobTitleInputChange(e)}
              className="box-style"
              type="text"
              id="jobTitle"
              name="user_jobTitle"
              placeholder="عنوان شغلی"
              value={this.state.jobTitle}
            />
            <input
              onChange={e => this.handleProfilePicUrlInputChange(e)}
              className="box-style"
              type="text"
              id="profileUrl"
              name="user_profileUrl"
              placeholder="لینک عکس پروفایل"
              value={this.state.profilePicURL}
            />
            <textarea
              onChange={e => this.handleBioInputChange(e)}
              className="box-style bio-box-style"
              id="bio"
              name="user_bio"
              placeholder="بیو"
              value={this.state.bio}
            />
          </fieldset>
          <fieldset />
          <Popup
            trigger={
              <button className="button" type="submit">
                ثبت‌نام
              </button>
            }
            open={status == "error"}
            position="right center"
          >
            <div> {this.state.errorValue} </div>
          </Popup>
        </form>
      </div>
    );
  }
  handleDupPasswordInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ dupPassword: e.target.value });
  }
  handleBioInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({ bio: e.target.value });
  }
  handleProfilePicUrlInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ profilePicURL: e.target.value });
  }
  handleJobTitleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ jobTitle: e.target.value });
  }
  handlePasswordInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ password: e.target.value });
  }
  handleUserNameInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ userName: e.target.value });
  }
  handleLastNameInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ lastName: e.target.value });
  }
  handleFirstNameInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ firstName: e.target.value });
  }
  submitRegisterFrom(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const {
      firstName,
      lastName,
      userName,
      password,
      dupPassword,
      jobTitle,
      profilePicURL,
      bio
    } = this.state;
    console.log(password);
    console.log(dupPassword);
    if (password !== dupPassword) {
      this.setState({
        status: "error",
        errorValue: "رمز عبور و تکرار شده‌ی آن مطابقت ندارد.",
        password: "",
        dupPassword: ""
      });
    } else if (password.length < 6) {
      this.setState({
        status: "error",
        errorValue: "طول رمز عبور کمتر از ۶ کاراکتر است.",
        password: "",
        dupPassword: ""
      });
    } else if (
      !(
        firstName !== `` &&
        lastName !== `` &&
        userName !== `` &&
        password !== `` &&
        jobTitle !== `` &&
        profilePicURL !== `` &&
        bio !== ``
      )
    ) {
      this.setState({
        status: "error",
        errorValue: "فیلد‌های ثبت‌نام نباید خالی باشد.",
        password: "",
        dupPassword: ""
      });
    } else {
      const url: string = `${process.env.REACT_APP_BASE_URL}/register`;
      console.log(url);
      axios
        .post(
          url,
          {
            firstName,
            lastName,
            userName,
            password,
            jobTitle,
            profilePicURL,
            bio
          },
          {
            headers: {
              "content-type": "application/json; charset=utf-8"
            }
          }
        )
        .then((response: any) => {
          this.setState({ status: "logged-in" });
        })
        .catch((err: any) => {
          this.setState({
            password: "",
            dupPassword: "",
            status: "error",
            errorValue: "نام کاربری تکراری است."
          });
        });
    }
  }
}

export default index;

interface Props {}

interface State {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  dupPassword: string;
  jobTitle: string;
  profilePicURL: string;
  bio: string;
  status: string;
  errorValue: string;
}
