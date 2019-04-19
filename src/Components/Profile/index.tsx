import React, { Component } from 'react';
import './style.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';
import AddSkill from './AddSkill';

import UserInfo from './UserInfo';

export interface ProfileProps {

}

export interface ProfileState {
    bio: string;
}

class Profile extends React.Component<ProfileProps, ProfileState> {
    constructor(props: ProfileProps) {
        super(props);
        this.state = {
            bio: 'سیشتسیشسی',
        };
    }

    render() {
        const { bio } = this.state
        return (
            <div>
                <Header />
                <div className="row profile-blue-background"></div>
                <div className="container body-container">
                    <UserInfo firstName="ممرضا" lastName="کیانی" id="2" jobTitle="بیکار" profilePic="aa" userName="assd" />
                    <div className="row">
                        <div className="col-1 dummy"></div>
                        <div className="col-10">
                            <div id="description">
                                <p id="bio-text">{bio}</p>
                            </div>
                        </div>
                        <div className="col-1 dummy"></div>
                    </div>
                    <AddSkill />
                    <div className="row">
                        <div className="col-1 dummy"></div>
                        <div className="col-10">
                            <div id="skills-container">
                                <div className="skill">
                                    <span className="skill-text">HTML</span>
                                    <button className="skill-button not-endorsed"><span>2</span></button>
                                </div>
                                <div className="skill">
                                    <span className="skill-text">CSS</span>
                                    <button className="skill-button not-endorsed"><span>3</span></button>
                                </div>
                                <div className="skill">
                                    <span className="skill-text">JavaScript</span>
                                    <button className="skill-button endorsed" disabled><span>16</span></button>
                                </div>
                                <div className="skill">
                                    <span className="skill-text">TypeScript</span>
                                    <button className="skill-button endorsed" disabled><span>2</span></button>
                                </div>
                                <div className="skill">
                                    <span className="skill-text">Android</span>
                                    <button className="skill-button deleted"><span>4</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 dummy"></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Profile;
