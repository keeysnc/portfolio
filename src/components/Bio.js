import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Bio() {

  // let bg = document.body.style.background = "#000000";
  // const [color, changeColor] = useState(bg);

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">My name is <Link alt="home" to="/about">Nathan Keeys.</Link> I'm a Creative Technologist Consultant, Designer and Music Artist under the name <span><a target="_blank" href="https://80cacao.bandcamp.com/">80% Cacao</a></span></h1>
        <h4 className="subtitle"></h4>
          <p style={{lineHeight: '1.7rem'}}>
          This website showcases a mix of self-initiated, client work and collaborative projects.
          I have a passion for continuous learning which has fueled my excitement to learn about newcoming technologies, and the creative
          ways humans interact with them. 
          <br></br>
          <br></br>
          Feel free to view my code on <a target="_blank" href="https://github.com/keeysnc"><b>github</b></a>.
          </p>
        </div>
        <h1>Projects & Products</h1>
        <br/>
        <h3><a target="_blank" href="http://noisegen.io/">noisegen.io</a></h3>
        <h3><a target="_blank" href="https://rp3agency.com/">rp3agency.com</a></h3>
        <h3><a target="_blank" href="https://abigailsdrivingschool.com/">abigailsdrivingschool.com</a></h3>
      </div>
    );
  }

export default Bio;