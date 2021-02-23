import React, { useState } from 'react';
import profileImg from '../img/profile-pic.jpg'

function About() {

    return (
    <div className="section">
        <div className="col-md-12 row">
        <div className="col-md-6">
            <img className="profile-img" src={profileImg}></img>
        </div>
        <div className="col-md-6 about-content">
        <div className="about">
            <h1 className="title">About Me</h1>
            <p style={{lineHeight: '1.7rem'}}>
            As an artist and technologist, I'm intrigued about new technologies and the ways humans interact with them. 
            Creating interactive art is an outlet for myself as well as an exciting way to make small experiences for others to enjoy.
            </p>
        </div>
        </div>
    </div>
    </div>
    );
  }

export default About;