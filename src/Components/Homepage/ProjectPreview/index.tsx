import React, { Component } from "react";

import "./style.css";
import HomepageSkill from "../HomepageSkill";
import { Redirect } from "react-router";

class ProjectPreview extends Component<Props, State> {
  interval: any = undefined;

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      redirectTo: null,
      remainingTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick(): void {
    const { deadline } = this.props.project;
    this.setState({
      remainingTime: !this.props.deadlinePassed ? deadline - Date.now() : 0
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRemainingTime(remainingTime: number): React.ReactNode {
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const seconds = Math.floor(remainingTime / SECOND) % 60;
    const minutes = Math.floor(remainingTime / MINUTE) % 60;
    const hours = Math.floor(remainingTime / HOUR) % 24;
    const days = Math.floor(remainingTime / DAY);

    console.log(seconds, minutes);
    return (
      <div className="project-preivew-remtime">
        <div className="remtime-title">زمان باقی مانده:</div>
        <div className="remtime-value">
          {!!minutes && <span>{minutes}</span>}:
          {!!seconds && <span>{seconds}</span>}
        </div>
      </div>
    );
  }

  deadlinePassed(): React.ReactNode {
    return <div className="project-preivew-remtime-expire">مهلت تمام شده</div>;
  }

  render() {
    const { project } = this.props;
    return !!this.state.redirectTo ? (
      <Redirect to={this.state.redirectTo} />
    ) : (
      <div>
        <div
          className={`project-preview ${this.deadlinePassed ? "expire" : ""}`}
          onClick={e => this.handleProjectClick(e)}
        >
          <img
            className="project-preview-pic"
            src={project.imageUrl}
            alt="عکس پروژه"
          />
          <div className="project-preview-info-container">
            <div className="project-preview-header">
              <div className="project-preivew-title">{project.title}</div>
              {!this.props.deadlinePassed
                ? this.getRemainingTime(this.state.remainingTime)
                : this.deadlinePassed()}
            </div>
            <div className="project-preivew-description">
              {project.description}
            </div>
            <div className="project-preivew-budget">
              <div className="budget-title">بودجه:</div>
              <div className="budget-value">{project.budget}</div>
              <div className="budget-currency">تومان</div>
            </div>
            <div className="project-preivew-skills">
              <div className="project-preview-skills-title">مهارت‌ها:</div>
              {project.skills.map((skill: any) => (
                <HomepageSkill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleProjectClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): any {
    this.setState({
      redirectTo: `/project?id=${this.props.project.id}`
    });
  }
}

export default ProjectPreview;

interface Props {
  project: any;
  deadlinePassed: boolean;
}
interface State {
  remainingTime: number;
  redirectTo: string | null;
}
