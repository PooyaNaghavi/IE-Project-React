import React, { Component } from "react";
import "./style.css";
import Footer from "../Utils/Footer";
import Header from "../Utils/Header";

import UserInfo from "./UserInfo";
import axios from "axios";
import UserSkills from "./UserSkills";
import { Redirect } from "react-router";

export interface ProfileProps {
  location: any;
}

export interface ProfileState {
  userId: string | null;

  firstName: string;
  jobTitle: string;
  lastName: string;
  profilePictureURL: string;

  bio: string;

  skills: Array<any>;
  allSkills: Array<any>;

  error: boolean;
}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      userId: null,
      bio: "",
      firstName: "",
      jobTitle: "",
      lastName: "",
      profilePictureURL: "",
      skills: [],
      allSkills: [],
      error: false
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const userId = queryParams.get("id");
    this.setState({
      userId
    });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/user?id=${userId}`, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          Authorization: localStorage.getItem("JWT")
        }
      })
      .then((response: any) => {
        this.setState({
          firstName: response.data.user.firstName,
          jobTitle: response.data.user.jobTitle,
          lastName: response.data.user.lastName,
          profilePictureURL: response.data.user.profilePictureURL,

          bio: response.data.user.bio,

          skills: response.data.user.skills,
          allSkills: response.data.allSkills,

          error: false
        });
      })
      .catch((err: any) => {
        console.error(err);
        this.setState({
          error: true
        });
      });
  }

  render() {
    const {
      firstName,
      lastName,
      userId,
      jobTitle,
      profilePictureURL,
      bio,
      skills,
      allSkills
    } = this.state;
    return !localStorage.getItem("JWT") ? (
      <Redirect to="/login" />
    ) : (
        <div>
          <Header />
          <div className="row profile-blue-background" />
          <div className="container body-container">
            <UserInfo
              firstName={firstName}
              lastName={lastName}
              id={userId}
              jobTitle={jobTitle}
              profilePictureURL={profilePictureURL}
            />
            <div className="row">
              <div className="col-1 dummy" />
              <div className="col-10">
                <div id="description">
                  <p id="bio-text">{bio}</p>
                </div>
              </div>
              <div className="col-1 dummy" />
            </div>
            <UserSkills skills={skills} allSkills={allSkills} userId={userId} />
          </div>
          <Footer />
        </div>
      );
  }
}

export default Profile;
