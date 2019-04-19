import React, { Component } from 'react'
import './style.css'
import Skill from '../../Utils/Skill';

export interface ProjectSkillsProps {
    skills: Array<any>,
}

export interface ProjectSkillsState {
    skills: Array<any>,
}

class ProjectSkills extends React.Component<ProjectSkillsProps, ProjectSkillsState> {
    constructor(props: ProjectSkillsProps) {
        super(props);
    }
    render() {
        return (
            <div className="skills-container section-container">
                <div className="maharat-haye-lazem blue">مهارت‌های لازم:</div>
                <div className="skills-list-container">
                    {this.props.skills.map(skill =>
                        (<Skill
                            key={skill.name}
                            name={skill.name}
                            point={skill.point}
                            endorsed={true}
                            disabled={true}
                            selfSkill={false}
                        />)
                    )}
                </div>
            </div>
        );
    }
}

export default ProjectSkills;