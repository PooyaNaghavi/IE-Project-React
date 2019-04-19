import React, { Component } from 'react';
import './style.css'


export interface SkillProps {
    name: string,
    point: number,
    endorsed: boolean,
    disabled: boolean,
}

export interface SkillState {
    name: string,
    point: number,
    endorsed: boolean,
    disabled: boolean,
}

class Skill extends React.Component<SkillProps, SkillState> {
    constructor(props: SkillProps) {
        super(props);
        this.state = {
            name: '',
            point: 0,
            endorsed: false,
            disabled: false,
        };
    }
    render() {
        const {
            name,
            point,
            endorsed,
            disabled,
        } = this.props
        return (
            <div className="skill">
                <span className="skill-text">{name}</span>
                <button className={`skill-button ${endorsed ? 'endorsed' : ''}`} disabled={disabled} onClick={e => this.handleClick(e)} >
                    <span>{point}</span>
                </button>
            </div>
        );
    }
    handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error("Method not implemented.");
    }
}

export default Skill;