import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Bio() {

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">My name is Nathan Keeys - Creative Technologist and founder of UX studio, Digital Anthro.</h1>
        <h4 className="subtitle"></h4>
          <h4 style={{lineHeight: '1.7rem'}}>
          This website showcases a mix of self-initiated projects, client work and collaborative interactive projects. Feel free to explore, listen and view these works. 
          </h4>
        </div>
        <h1>Work</h1>
        <h4><a target="_blank" href="http://noisegen.io/">Noisegen.io - Design, WebGL and Three.js Development</a></h4>
        <h4><a target="_blank" href="https://abigailsdrivingschool.com/en/">Abigails Driving School - Gatsby.js Development</a></h4>
        <h4><a target="_blank" href="https://www.vinvox.com/">Vinvox - SVG Web Animations</a></h4>
        <h4><a target="_blank" href="https://carpedmdating.com/">CarpeDM Dating - Wordpress Development</a></h4>
        <h4><a target="_blank" href="https://80cacao.bandcamp.com/">80% Cacao - Electronic Music Project</a></h4>
        <br/>
        <br/>
        <h1>Talks & Teaching</h1>
        <h4><a target="_blank" href="https://vimeo.com/463281152">Introduction to Node.js Review</a></h4> 
        <br/>
        <br/>
        <h1>Awards</h1>
        <h4><a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Honorable Mention - noisegen.io</a></h4>
        <h4><a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Mobile Excellence - noisegen.io</a></h4>
        <h4><a target="_blank" href="https://borensteingroup.com/tate-tryon-top-non-profit-accounting-firm-mints-gold-best-professional-services-website-2017-annual-international-davey-awards/">Clutch - Best Professional Service Website 2017</a></h4>  
        <br/>
        <br/>
        <h1>Interactive Exhibits</h1>
        <h4><a target="_blank" href="https://cicamuseum.com/over-the-structures-2021/">Noise Shift - CICA Museum - Over the Structures Exhibition 2021</a></h4>
      </div>
    );
  }

export default Bio;