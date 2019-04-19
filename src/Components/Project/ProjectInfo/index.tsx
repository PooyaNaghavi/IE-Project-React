import React, { Component } from 'react'
import './style.css'

export interface ProjectInfoProps {
    pic: string,
    title: string,
    deadline: number | null,
    budget: number,
    winner: string | null,
    description: string
}

export interface ProjectInfoState {
    remainingTime: number
}

class ProjectInfo extends React.Component<ProjectInfoProps, ProjectInfoState> {
    interval: any = undefined;

    constructor(props: ProjectInfoProps) {
        super(props);
        this.state = {
            remainingTime: props.deadline ? props.deadline - Date.now() : 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick(): void {
        const { deadline } = this.props
        this.setState({
            remainingTime: deadline ? deadline - Date.now() : 0
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const {
            pic,
            title,
            budget,
            winner,
            description,
        } = this.props
        const { remainingTime } = this.state
        return (
            <div className="project-info-container">
                <div className="project-image-container">
                    <img className="project-image" src={pic}
                        alt="تصویر پروژه" />
                </div>
                <div className="project-info">
                    <div className="project-title">
                        {title}
                    </div>
                    {remainingTime > 0 ?
                        (<div className="project-deadline grey project-info-item first">
                            <i className="flaticon-deadline"></i>
                            <div className="title">زمان باقی‌مانده:</div>
                            <div className="text">{this.getRemainingTime(remainingTime)}</div>
                            {/* <div className="text">۱۷ دقیقه و ۲۵ ثانیه</div> */}
                        </div>) :
                        (<div className="project-deadline red project-info-item first">
                            <i className="flaticon-deadline"></i>
                            <div className="title">مهلت تمام شده</div>
                        </div>)
                    }
                    <div className="project-budget project-info-item blue">
                        <i className="flaticon-money-bag"></i>
                        <div className="title">بودجه:</div>
                        <div className="text">{budget} تومان</div>

                    </div>
                    {winner && (<div className="project-winner project-info-item green">
                        <i className="flaticon-check-mark"></i>
                        <div className="title">برنده:‌</div>
                        <div className="text">{winner}</div>
                    </div>)}
                    <div className="project-description-title">
                        توضیحات
                    </div>
                    <div className="project-description">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
    getRemainingTime(remainingTime: number): React.ReactNode {
        const SECOND = 1000
        const MINUTE = 60 * SECOND
        const HOUR = 60 * MINUTE
        const DAY = 24 * HOUR
        const seconds = Math.floor(remainingTime / SECOND) % 60
        const minutes = Math.floor(remainingTime / MINUTE) % 60
        const hours = Math.floor(remainingTime / HOUR) % 24
        const days = Math.floor(remainingTime / DAY)

        return (<div>
            {!!days && <span className="rem-time-text">{days} روز</span>}
            {!!hours && <span className="rem-time-text">{hours} ساعت</span>}
            {!!minutes && <span className="rem-time-text">{minutes} دقیقه</span>}
            {!!seconds && <span className="rem-time-text">{seconds} ثانیه</span>}
        </div>)

    }
}

export default ProjectInfo;