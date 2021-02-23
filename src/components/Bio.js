import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Bio() {

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">A collection of audio and visual projects by Nathan Keeys</h1>
        <h4 className="subtitle"></h4>
          <p style={{lineHeight: '1.7rem'}}>
          This website showcases a mix of self-initiated and collaborative audio and visual projects.
          I have a passion for creating interactive art and experimental music using new technologies. Feel free to explore, listen and view these works. 
          </p>
        </div>
        <h1>Audio & Visual Projects</h1>
        <br/>
        <h4><a target="_blank" href="http://noisegen.io/">Noisegen.io - Experimental Perlin Noise Generator</a></h4>
        <h4><a target="_blank" href="https://80cacao.bandcamp.com/">80% Cacao - Electronic Music Project</a></h4>
        {/* <br/>
        <br/>
        <h1>Talks & Teaching</h1>
        <br/>
        <h4><a target="_blank" href="https://vimeo.com/463281152">Introduction to Node.js Review</a></h4> */}
        <br/>
        <br/>
        {/* <h1>Awards</h1>
        <br/>
        <h4><a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Honorable Mention - noisegen.io</a></h4>
        <h4><a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Mobile Excellence - noisegen.io</a></h4>
        <h4><a target="_blank" href="https://borensteingroup.com/tate-tryon-top-non-profit-accounting-firm-mints-gold-best-professional-services-website-2017-annual-international-davey-awards/">Clutch - Best Professional Service Website 2017</a></h4> */} 
        <h1>Exhibits</h1>
        <br/>
        <h4><a href="#">Noise Shift - Coming Soon</a></h4>
      </div>
    );
  }

export default Bio;