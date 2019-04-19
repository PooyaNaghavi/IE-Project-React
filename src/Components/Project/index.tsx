import React, { Component } from "react";
import "./style.css";
import Footer from "../Utils/Footer";
import Header from "../Utils/Header";
import ProjectInfo from "./ProjectInfo";

import axios from "axios";
import ProjectSkills from "./ProjectSkills";
import ProjectBid from "./ProjectBid";

export interface ProjectProps {
  match: any;
  location: any;
}

export interface ProjectState {
  // ProjectInfo
  pic: string;
  title: string;
  deadline: number | null;
  budget: number;
  winner: string | null;
  description: string;

  // skills
  skills: Array<any>;

  // bid
  bids: Array<any>;
  userAlreadyBid: boolean;

  error: boolean;
  projectId: string | null;
}

class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      pic: "",
      title: "",
      deadline: null,
      budget: 0,
      winner: null,
      description: "",

      skills: [],

      bids: [],
      userAlreadyBid: false,

      error: false,
      projectId: null
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const projectId = queryParams.get("id");
    this.setState({
      projectId
    });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/project?id=${projectId}`, {
        headers: {
          "content-type": "application/json; charset=utf-8"
        }
      })
      .then((response: any) => {
        const bids = response.data.bids || [];
        const userAlreadyBid = !!bids.find((bid: any) => bid.user.id === "1"); // TODO: get UserId from cookie
        console.log("aaaaa: ", userAlreadyBid);

        this.setState({
          pic: response.data.project.imageUrl,
          title: response.data.project.title,
          deadline: response.data.project.deadline,
          budget: response.data.project.budget,
          winner: response.data.project.winner
            ? response.data.project.winner.name
            : null,
          description: response.data.project.description,

          skills: response.data.project.skills,

          bids,
          userAlreadyBid,

          error: false
        });
        console.log("bids: ", this.state.bids);
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
      pic,
      title,
      deadline,
      budget,
      winner,
      description,
      skills,
      userAlreadyBid,
      projectId,
      error
    } = this.state;


    return error ? (
      <div>خطا، لطفا دوباره تلاش کنید</div>
    ) : (
        <div>
          <Header />
          <div className="row project-blue-background" />
          <div className="container body-container">
            <div className="row">
              <div className="col-1 dummy" />
              <div className="col-10">
                <div className="project-container">
                  <ProjectInfo
                    pic={pic}
                    title={title}
                    deadline={deadline}
                    budget={budget}
                    winner={winner}
                    description={description}
                  />
                  <ProjectSkills skills={skills} />
                  <ProjectBid
                    projectId={projectId}
                    deadlinePassed={deadline ? deadline < Date.now() : false}
                    alreadyBid={userAlreadyBid}
                  />
                </div>
              </div>
              <div className="col-1 dummy" />
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}

export default Project;
