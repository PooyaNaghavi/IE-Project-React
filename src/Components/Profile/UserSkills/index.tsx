import React, { Component } from "react";
import Skill from "../../Utils/Skill";
import axios from "axios";

export interface UserSkillsProps {
  skills: Array<any>;
  allSkills: Array<any>;
  userId: string | null;
}

export interface UserSkillsState {
  skills: Array<any> | null;
  skillToAdd: string;
  addSkillSuccess: boolean;
  error: boolean;
}

class UserSkills extends React.Component<UserSkillsProps, UserSkillsState> {
  constructor(props: UserSkillsProps) {
    super(props);
    this.state = {
      skills: null,
      skillToAdd: "",
      addSkillSuccess: false,
      error: false
    };
  }

  render() {
    const { allSkills, skills, userId } = this.props;
    const { skills: stateSkills } = this.state;
    const skillsList = stateSkills || skills;
    console.log(skillsList);
    return (
      <div>
        {userId === "1" && (
          <div className="row">
            <div className="col-1 dummy" />
            <div className="col-10">
              <div id="add-skill-container">
                <div id="maharat-ha">مهارت‌ها:</div>
                <form
                  id="add-skill-form"
                  onSubmit={e => this.handleAddSkillSubmit(e)}
                  method="POST"
                >
                  <select
                    name="add-skill-select"
                    value={this.state.skillToAdd}
                    onChange={e => this.handleSelectChange(e)}
                    id="add-skill-select"
                  >
                    <option value="" disabled hidden>
                      -- انتخاب مهارت‌ها --
                    </option>
                    {this.props.allSkills.map(skill =>
                      this.userHasThisSkill(skill) ? (
                        <option key={skill.name} style={{ display: "none" }} />
                      ) : (
                        <option key={skill.name} value={skill.name}>
                          {skill.name}
                        </option>
                      )
                    )}
                  </select>
                  <button type="submit" id="add-skill-button">
                    افزودن مهارت
                  </button>
                </form>
              </div>
            </div>
            <div className="col-1 dummy" />
          </div>
        )}

        <div className="row">
          <div className="col-1 dummy" />
          <div className="col-10">
            <div id="skills-container">
              {skillsList.map(skill => {
                const endorsed = !!skill.endorses.filter(
                  (en: any) => en.endorser === "1"
                ).length;
                const disabled = endorsed;
                const selfSkill = userId === "1";
                return (
                  <Skill
                    key={skill.name}
                    endorsed={endorsed}
                    disabled={disabled}
                    selfSkill={selfSkill}
                    name={skill.name}
                    point={skill.point}
                    userToEndorse={userId}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-1 dummy" />
        </div>
      </div>
    );
  }

  userHasThisSkill(skill: any): any {
    const skillsList = this.state.skills || this.props.skills;
    return !!skillsList.filter(s => s.name === skill.name).length;
  }

  handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    this.setState({ skillToAdd: e.target.value });
  }

  handleAddSkillSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(this.state.skillToAdd);
    if (this.state.skillToAdd != ``) {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/user/skill`,
          {
            name: this.state.skillToAdd
          },
          {
            headers: {
              "content-type": "application/json; charset=utf-8",
              Autorization: localStorage.getItem("JWT")
            }
          }
        )
        .then((response: any) => {
          let skillsList = this.state.skills || this.props.skills;
          skillsList.push({
            name: this.state.skillToAdd,
            point: 0,
            endorses: []
          });
          this.setState({
            skills: skillsList,
            skillToAdd: "",
            addSkillSuccess: true,
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
  }
}

export default UserSkills;
