import React, { Component } from 'react';
import './style.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';
import AddSkill from './AddSkill';

import ProfilePic from './assets/Mreza.jpg';

class index extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="row blue-background"></div>
            <div className="container body-container">
                <div className="row">
                    <div className="col-1 dummy"></div>
                    <div className="col-10">
                        <div className="profile-container">
                            <div className="profile-pic-border">
                                <img className="profile-pic" src={ProfilePic} alt="عکس پروفایل"/>
                            </div>
                            <div className="skewed-rectangle-container">
                                <div className="rectangle big skewed"></div>
                            </div>
                            <div id="title-container">
                                <div id="profile-name">محمدرضا کیانی</div>
                                <div id="job-title">اعلی حضرت</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 dummy"></div>
                </div>
                <div className="row">
                    <div className="col-1 dummy"></div>
                    <div className="col-10">
                        <div id="description">
                            <p id="bio-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک
                                است. چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                و
                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
                                و
                                آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                                رایانه
                                ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
                                که
                                تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                                حروفچینی
                                دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                    <div className="col-1 dummy"></div>
                </div>
                <AddSkill/>
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
            <Footer/>
        </div>
    );
  }
}

export default index;
