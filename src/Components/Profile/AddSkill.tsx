import React, { Component } from 'react';
import './style.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';

class AddSkill extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-1 dummy"></div>
            <div className="col-10">
                <div id="add-skill-container">
                    <div id="maharat-ha">مهارت‌ها:</div>
                    <form id="add-skill-form" action="#" method="POST">
                        <select name="add-skill-select" id="add-skill-select">
                            <option value="" selected disabled hidden>-- انتخاب مهارت‌ها --</option>
                            <option value="a">Android</option>
                            <option value="C++">C++</option>
                            <option value="C">C</option>
                            <option value="Swift">Swift</option>
                        </select>
                        <button type="submit" id="add-skill-button">افزودن مهارت</button>
                    </form>
                </div>
            </div>
            <div className="col-1 dummy"></div>
        </div>
    );
  }
}

export default AddSkill;
