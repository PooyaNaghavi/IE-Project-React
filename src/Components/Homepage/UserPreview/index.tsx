import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { Redirect } from "react-router";

class UserPreview extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      redirectTo: null
    };
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return !!this.state.redirectTo ? (
      <Redirect to={this.state.redirectTo} />
    ) : (
      <div className="user-preview" onClick={e => this.handleProfileClick(e)}>
        <img
          className="user-preview-pic"
          src={user.profilePictureURL}
          alt="عکس پروفایل"
        />
        <div className="user-preview-info-container">
          <div className="user-preview-name">
            {user.firstName} {user.lastName}
          </div>
          <div className="user-preview-bio">{user.jobTitle}</div>
        </div>
      </div>
    );
  }
  handleProfileClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    this.setState({
      redirectTo: `/user?id=${this.props.user.id}`
    });
  }
}

export default UserPreview;

interface Props {
  user: any;
}

interface State {
  redirectTo: string | null;
}
