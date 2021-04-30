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
            As an designer and creative technologist, I'm intrigued about new technologies and the ways humans interact with them. 
            I specialize in modern technology used to design & develop web interfaces as well as interactive web experiences.
            I've been fortunate to work in the creative industry for 8+ years working with clients such as Giant, MGM National Harbor, Accenture, Childrens Hospital and more. 
            </p>
        </div>
        </div>
    </div>
    </div>
    );
  }

export default About;