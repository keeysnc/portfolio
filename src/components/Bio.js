import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Bio() {

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">Creative Technologist / Designer.<br/>
        Founder of Studio - Digital Anthro.</h1>
        <h4 className="subtitle"></h4>
        <h4 style={{lineHeight: '1.4em'}}>Curiosity, creativity, and infinite learning are what make development and design such a joy to work in. Over 8+ years in the creative and tech industry, I've been fortunate to work with notable brands and organizations such as Accenture, Children's Hospital, Giant, and PenFed Credit Union.
        I currently work as a full-stack developer for Accenture and own a small design studio called Digital Anthro. I work with javascript development environments using React, Vue.js, Node.js, interactive development technologies, and modern design systems. When I'm not coding or running Digital Anthro, I enjoy exercising, playing guitar, making music on Ableton Live, and binge-watching anime.</h4>
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
        <h1>Albums</h1>
        <h4><a target="_blank" href="https://80cacao.bandcamp.com/album/luma">Luma - Instrumental EP. A production of instrumentals which fuse ambient sound design, hiphop and electronic elements.</a></h4>
        <br/>
        <br/>
        <h1>Interactive Exhibits</h1>
        <h4><a target="_blank" href="https://cicamuseum.com/over-the-structures-2021/">Noise Shift - CICA Museum - South Korea- Over the Structures Exhibition 2021</a></h4>
      </div>
    );
  }

export default Bio;