import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class HomepageSkill extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }

  render() {
    const { skill } = this.props;
    return <div className="project-preview-skill">{skill.name}</div>;
  }
}

export default HomepageSkill;

interface Props {
  skill: any;
}

interface State {}
