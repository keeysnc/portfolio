import React, { useState } from 'react';
import profileImg from '../img/about-pic.png'

function About() {

    return (
    <div className="section">
        <div className="col-md-12 row">
        <div className="col-md-6">
            <img className="profile-img" src={profileImg}></img>
        </div>
        <div className="col-md-6">
        <div className="about">
            <h1 className="title">About Me</h1>
            <h4 className="subtitle highlight">Software Developer</h4>
            <p style={{lineHeight: '1.7rem'}}>
            I'm a self starter whose excited about emerging tech and it's impact on humans. 
            I'm passionate in creating purpose-driven digital interactions using 2D/3D visuals,
            animations and UX/UI principles. When I'm not coding you can find me watching anime
            on Crunchyroll, getting in a quick workout or messing around on Ableton Live. 
            </p>
            <div className="stats">
                <h1 className="title">Current Knowledge</h1>
                <p><span className="highlight">Design:</span> Adobe CS Suite, Sketch, Invision, XD</p>
                <p><span className="highlight">Frontend:</span> HTML, CSS, Javascript, React, Gatsby.js</p>
                <p><span className="highlight">Creative:</span> WebGL, GSAP, Three.js, GLSL, P5.js</p>
                <p><span className="highlight">Backend:</span> Python, Django, Postgres, MongoDB, Node.js, Netlify</p>
                <p><span className="highlight">Development Enviornment:</span> Docker, Vagrant, Linux</p>
                <p><span className="highlight">Testing:</span> Cypress, Postman</p>
                <p><span className="highlight">Audio Composition:</span> Ableton Live 10</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
  }

export default About;