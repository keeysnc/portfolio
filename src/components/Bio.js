import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Bio() {

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">My name is <Link alt="home" to="/about">Nathan Keeys.</Link> I'm a Full Stack Developer and Designer.</h1>
        <h4 className="subtitle"></h4>
          <p style={{lineHeight: '1.7rem'}}>
          This website showcases a mix of self-initiated, client work and collaborative projects.
          I have a passion for continuous learning which has fueled my excitement to learn about newcoming technologies, and the creative
          ways humans interact with them. 
          <br></br>
          <br></br>
          Feel free to view my code on <a target="_blank" href="https://github.com/keeysnc"><b>github</b></a>.
          <br></br>
          <b>Clientele: </b>Clinical Pharmacy Associates / Vinvox / MednovateConnect / Ametropolitan Driving School / Good Fitness / Abigail's Driving School / CarpeDM
          </p>
        </div>
        <h1>Projects & Products</h1>
        <br/>
        <h4><a target="_blank" href="http://noisegen.io/">noisegen.io</a></h4>
        <h4><a target="_blank" href="https://rp3agency.com/">rp3agency.com</a></h4>
        <h4><a target="_blank" href="https://abigailsdrivingschool.com/">abigailsdrivingschool.com</a></h4>
        <br/>
        <br/>
        <h1>Talks & Teaching</h1>
        <br/>
        <h4><a target="_blank" href="https://vimeo.com/463281152">Introduction to Node.js Review</a></h4>
        <br/>
        <br/>
        <h1>Awards</h1>
        <br/>
        <h4><a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Honorable Mention - noisegen.io</a></h4>
        <h4><a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Mobile Excellence - noisegen.io</a></h4>
        <h4><a target="_blank" href="https://borensteingroup.com/tate-tryon-top-non-profit-accounting-firm-mints-gold-best-professional-services-website-2017-annual-international-davey-awards/">Clutch - Best Professional Service Website 2017</a></h4>
      </div>
    );
  }

export default Bio;