import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Bio() {

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">Founder of Studio - Digital Anthro. <br/>
        Front-End Developer, Designer, Creative Coder.</h1>
        <h4 className="subtitle"></h4>
          <h4 style={{lineHeight: '1.7rem'}}>
          As an designer and front-end developer, I'm intrigued about new technologies and the ways humans interact with them. I specialize in modern technology used to design & develop web interfaces as well as interactive web experiences. I've been fortunate to work in the creative industry for 8+ years working with clients such as Giant, MGM National Harbor, Accenture, Childrens Hospital and more.
          </h4>
        </div>
        <h1>Work</h1>
        <h4><a target="_blank" href="http://noisegen.io/">Noisegen.io</a></h4>
        <h4><a target="_blank" href="https://abigailsdrivingschool.com/en/">Abigails Driving School</a></h4>
        <h4><a target="_blank" href="https://www.vinvox.com/">Vinvox</a></h4>
        <h4><a target="_blank" href="https://carpedmdating.com/">CarpeDM Dating</a></h4>
        <h4><a target="_blank" href="https://rp3agency.com/">RP3 Agency</a></h4>
        <h4><a target="_blank" href="https://www.hrci.org/">HRCI</a></h4>
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