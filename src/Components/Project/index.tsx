import React, { Component } from 'react';
import './style.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';

import projectPic from './assets/Project.jpg';

class index extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="row project-blue-background">
            </div>
            <div className="container body-container">
                <div className="row">
                    <div className="col-1 dummy"></div>
                    <div className="col-10">
                        <div className="project-container">
                            <div className="project-info-container">
                                <div className="project-image-container">
                                    <img className="project-image" src={projectPic}
                                        alt="تصویر پروژه"/>
                                </div>
                                <div className="project-info">
                                    <div className="project-title">
                                        پروژه طراحی سایت جاب‌اونجا
                                    </div>
                                    <div className="project-deadline red project-info-item first">
                                        <i className="flaticon-deadline"></i>
                                        <div className="title">مهلت تمام شده</div>
                                    </div>
                                    {/*<div className="project-deadline grey project-info-item first">
                                        <i className="flaticon-deadline"></i>
                                        <div className="title">زمان باقی‌مانده:</div>
                                        <div className="text">۱۷ دقیقه و ۲۵ ثانیه</div>
                                    </div> --> */}
                                    <div className="project-budget project-info-item blue">
                                        <i className="flaticon-money-bag"></i>
                                        <div className="title">بودجه:</div>
                                        <div className="title">۲۵۰۰ تومان</div>

                                    </div>
                                    <div className="project-winner project-info-item green">
                                        <i className="flaticon-check-mark"></i>
                                        <div className="title">برنده:‌</div>
                                        <div className="title">وحید محمدی</div>
                                    </div>
                                    <div className="project-description-title">
                                        توضیحات
                                    </div>
                                    <div className="project-description">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                        است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در

                                    </div>
                                </div>
                            </div>
                            <div className="skills-container section-container">
                                <div className="maharat-haye-lazem blue">مهارت‌های لازم:</div>
                                <div className="skills-list-container">
                                    <div className="skill">
                                        <span className="skill-text">HTML</span>
                                        <button className="skill-button endorsed" disabled><span>2</span></button>
                                    </div>
                                    <div className="skill">
                                        <span className="skill-text">CSS</span>
                                        <button className="skill-button endorsed" disabled><span>3</span></button>
                                    </div>
                                    <div className="skill">
                                        <span className="skill-text">JavaScript</span>
                                        <button className="skill-button endorsed" disabled><span>16</span></button>
                                    </div>
                                    <div className="skill">
                                        <span className="skill-text">TypeScript</span>
                                        <button className="skill-button endorsed" disabled><span>2</span></button>
                                    </div>
                                </div>

                            </div>
                            <div className="bid-status-container section-container">
                                <div className="sabt-e-pishnahad">ثبت پیشنهاد</div>
                                {/* <form className="insert-bid-form" action="#" method="POST">
                                    <div className="form-input-container">
                                        <input className="insert-bid-input" type="text" placeholder="پیشنهاد خود را وارد کنید">
                                        <div className="form-input-text">تومان</div>
                                    </div>
                                    <button className="insert-bid-button" type="submit">ارسال</button>
                                </form> */}
                                {/* <div className="already-bid">
                                    <i className="flaticon-check-mark"></i>
                                    <div>شما قبلا پیشنهاد خود را ثبت کرده‌اید</div>
                                </div> */}
                                <div className="bid-deadline-passed">
                                    <i className="flaticon-danger"></i>
                                    <div>مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است!</div>
                                </div>
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
