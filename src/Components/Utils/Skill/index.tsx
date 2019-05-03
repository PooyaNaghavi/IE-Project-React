import React, { Component } from 'react';
import './style.css'
import axios from 'axios';


export interface SkillProps {
    name: string,
    point: number,
    selfSkill: boolean,
    endorsed: boolean,
    disabled: boolean,
    userToEndorse?: string | null,
}

export interface SkillState {
    name: string,
    point: number,
    endorsed: boolean,
    disabled: boolean,
    deleted: boolean,
    error: boolean,
}

class Skill extends React.Component<SkillProps, SkillState> {
    constructor(props: SkillProps) {
        super(props);
        this.state = {
            name: '',
            point: this.props.point,
            endorsed: this.props.endorsed,
            disabled: this.props.disabled,
            deleted: false,
            error: false,
        };
    }
    render() {
        const {
            name,
            selfSkill,
        } = this.props
        const { endorsed, point, disabled, deleted } = this.state
        return (
            <div className={`skill ${deleted ? 'hidden' : ''}`}>
                <span className="skill-text">{name}</span>
                <button
                    className={`skill-button ${endorsed ? 'endorsed' : 'not-endorsed'} ${selfSkill ? 'deleted' : ''}`}
                    disabled={disabled}
                    onClick={e => this.handleOnClick(e)} >
                    <span>{point}</span>
                </button>
            </div>
        );
    }
    handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        if (this.props.disabled) {
            return
        } else if (this.props.selfSkill) {
            this.handleRemoveSkill(e)
        } else if (!this.props.endorsed) {
            this.handleEndorseSkill(e)
        }
    }

    handleEndorseSkill(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): any {
        e.preventDefault()
        axios.put(
            `${process.env.REACT_APP_BASE_URL}/user/skill/${this.props.name}?id=${this.props.userToEndorse}`,
            // TODO: Change all these '1's to user from Cookies
            {
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            }
        ).then((response: any) => {
            this.setState({
                endorsed: true,
                point: this.state.point + 1,
                disabled: true,
                error: false,
            })

        }).catch((err: any) => {
            console.error(err)
            this.setState({
                error: true
            })
        });

    }

    handleRemoveSkill(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): any {
        e.preventDefault()
        if (!confirm('آیا مطمئن هستید؟')) return
        axios.delete(
            `${process.env.REACT_APP_BASE_URL}/user/skill/${this.props.name}`,
            // TODO: Change all these '1's to user from Cookies
            {
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            }
        ).then((response: any) => {
            this.setState({
                deleted: true,
                error: false,
            })
        }).catch((err: any) => {
            console.error(err)
            alert('درخواست شما با خطا مواجه شد، لطفا دوباره تلاش کنید.')
            this.setState({
                error: true
            })
        });
    }

}

export default Skill;