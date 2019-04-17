import React, { Component } from 'react';

import './style.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';

import mProfilePic from '../Profile/assets/Mreza.jpg';
import sProfilePic from '../Profile/assets/Sadegh.jpg';
import projectPic from '../Project/assets/Project.jpg'

class index extends Component{
  render() {
    return(
        <div>
            <Header/>
            <div className="row homepage-blue-background">
            </div>

            <div className="container body-container">
                <div className="row">
                    <div className="col-1 dummy"></div>
                    <div className="col-10">
                    
                        <div className="home-container">
                            <div className="home-title-container">
                                <div className="home-title">جاب‌اونجا خوب است!</div>
                                <div className="home-subtitle">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده از طراحان گرافیک است</div>
                            </div>
                            <div className="project-search-container">
                                <input className="search-input" type="text" placeholder="جستجو در جاب‌اونجا"/>
                                <button className="search-button">جستجو</button>
                            </div>
                            <div className="home-body">
                                <div className="user-search">
                                    <div className="user-search-container">
                                        <input className="user-search-input" type="text" placeholder="جستجو نام کاربر"/>
                                    </div>
                                    <div className="user-list">
                                        <div className="user-preview">
                                            <img className="user-preview-pic" src={sProfilePic} alt="عکس پروفایل"/>
                                            <div className="user-preview-info-container">
                                                <div className="user-preview-name">صادق حائری</div>
                                                <div className="user-preview-bio">گیک</div>
                                            </div>
                                        </div>
                                        <div className="user-preview">
                                            <img className="user-preview-pic" src={mProfilePic} alt="عکس پروفایل"/>
                                            <div className="user-preview-info-container">
                                                <div className="user-preview-name">محمدرضا کیانی</div>
                                                <div className="user-preview-bio">چیف تی‌ای</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-list">
                                    <div className="project-preview">
                                        <img className="project-preview-pic" src={projectPic} alt="عکس پروژه"/>
                                        <div className="project-preview-info-container">
                                            <div className="project-preview-header">
                                                <div className="project-preivew-title">وبسایت فروشگاهی مشابه دیجی کالا</div>
                                                <div className="project-preivew-remtime">
                                                    <div className="remtime-title">زمان باقی مانده:</div>
                                                    <div className="remtime-value">۱۷:۳۰</div>
                                                </div>
                                            </div>
                                            <div className="project-preivew-description"> ببین ما الان دقیقا یک فروشگاه میخوایم که
                                                شبیه دیجیکالا باشه
                                                دیگه حالا مثلا یه چیزای اضافه هم داشت ناراحت نمی‌شیم اصلن</div>
                                            <div className="project-preivew-budget">
                                                <div className="budget-title">بودجه:</div>
                                                <div className="budget-value">۲۵۰۰</div>
                                                <div className="budget-currency">تومان</div>
                                            </div>
                                            <div className="project-preivew-skills">
                                                <div className="project-preview-skills-title">مهارت‌ها:</div>
                                                <div className="project-preview-skill">Javascript</div>
                                                <div className="project-preview-skill">HTML</div>
                                                <div className="project-preview-skill">CSS</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-preview">
                                        <img className="project-preview-pic" src={projectPic} alt="عکس پروژه"/>
                                        <div className="project-preview-info-container">
                                            <div className="project-preview-header">
                                                <div className="project-preivew-title">وبسایت مشابه بامیلو</div>
                                                <div className="project-preivew-remtime">
                                                    <div className="remtime-title">زمان باقی مانده: </div>
                                                    <div className="remtime-value">۱۵:۳۰</div>
                                                </div>
                                            </div>
                                            <div className="project-preivew-description">یه وبسایت که مثلا مشابه بامیلو باشه</div>
                                            <div className="project-preivew-budget">
                                                <div className="budget-title">بودجه:</div>
                                                <div className="budget-value">۵۵۰۰</div>
                                                <div className="budget-currency">تومان</div>
                                            </div>
                                            <div className="project-preivew-skills">
                                                <div className="project-preview-skills-title">مهارت‌ها:</div>
                                                <div className="project-preview-skill">HTML</div>
                                                <div className="project-preview-skill">React</div>
                                                <div className="project-preview-skill">CSS</div>
                                                <div className="project-preview-skill">Javascript</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-preview expire">
                                        <img className="project-preview-pic" src={projectPic} alt="عکس پروژه"/>
                                        <div className="project-preview-info-container">
                                            <div className="project-preview-header">
                                                <div className="project-preivew-title">وبسایت مشابه بامیلو</div>
                                                <div className="project-preivew-remtime-expire">مهلت تمام شده</div>
                                            </div>
                                            <div className="project-preivew-description">یه وبسایت که مثلا مشابه بامیلو باشه</div>
                                            <div className="project-preivew-budget">
                                                <div className="budget-title">بودجه:</div>
                                                <div className="budget-value">۵۵۰۰</div>
                                                <div className="budget-currency">تومان</div>
                                            </div>
                                            <div className="project-preivew-skills">
                                                <div className="project-preview-skills-title">مهارت‌ها:</div>
                                                <div className="project-preview-skill">HTML</div>
                                                <div className="project-preview-skill">React</div>
                                                <div className="project-preview-skill">CSS</div>
                                                <div className="project-preview-skill">Javascript</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-preview">
                                        <img className="project-preview-pic" src={projectPic} alt="عکس پروژه"/>
                                        <div className="project-preview-info-container">
                                            <div className="project-preview-header">
                                                <div className="project-preivew-title">وبسایت مشابه بامیلو</div>
                                                <div className="project-preivew-remtime">
                                                    <div className="remtime-title">زمان باقی مانده: </div>
                                                    <div className="remtime-value">۱۵:۳۰</div>
                                                </div>
                                            </div>
                                            <div className="project-preivew-description">یه وبسایت که مثلا مشابه بامیلو باشه</div>
                                            <div className="project-preivew-budget">
                                                <div className="budget-title">بودجه:</div>
                                                <div className="budget-value">۵۵۰۰</div>
                                                <div className="budget-currency">تومان</div>
                                            </div>
                                            <div className="project-preivew-skills">
                                                <div className="project-preview-skills-title">مهارت‌ها:</div>
                                                <div className="project-preview-skill">HTML</div>
                                                <div className="project-preview-skill">React</div>
                                                <div className="project-preview-skill">CSS</div>
                                                <div className="project-preview-skill">Javascript</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-preview">
                                        <img className="project-preview-pic" src={projectPic} alt="عکس پروژه"/>
                                        <div className="project-preview-info-container">
                                            <div className="project-preview-header">
                                                <div className="project-preivew-title">وبسایت مشابه بامیلو</div>
                                                <div className="project-preivew-remtime">
                                                    <div className="remtime-title">زمان باقی مانده:</div>
                                                    <div className="remtime-value">۱۵:۳۰</div>
                                                </div>
                                            </div>
                                            <div className="project-preivew-description">یه وبسایت که مثلا مشابه بامیلو باشه</div>
                                            <div className="project-preivew-budget">
                                                <div className="budget-title">بودجه:</div>
                                                <div className="budget-value">۵۵۰۰</div>
                                                <div className="budget-currency">تومان</div>
                                            </div>
                                            <div className="project-preivew-skills">
                                                <div className="project-preview-skills-title">مهارت‌ها:</div>
                                                <div className="project-preview-skill">HTML</div>
                                                <div className="project-preview-skill">React</div>
                                                <div className="project-preview-skill">CSS</div>
                                                <div className="project-preview-skill">Javascript</div>
                                            </div>
                                        </div>
                                    </div>
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
