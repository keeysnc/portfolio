import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from './Container';
import codePenLogoAlt from '../img/codepen-alt.svg'
import mediumLogoAlt from '../img/medium-alt.png'
import resumeLogoAlt from '../img/resume-alt.svg'
import aboutLogo from '../img/about-logo-alt.svg'
import musicLogo from '../img/80percent-logo.svg'

function Footer() {
    return (
      <div className="Bio footer">
        <div className="justify-content-center">
        <Container>
            <ul>
                <Link alt="about" to="/about"><img className="aboutIcon icon" src={aboutLogo}></img></Link>
                <a alt="codepen" target="_blank" href="https://codepen.io/lwdstudio"><img className="codepenIcon icon-alt" src={codePenLogoAlt}></img></a>
                <a alt="medium" target="_blank" href="https://medium.com/@likewaterdesignco"><img className="mediumIcon icon-alt" src={mediumLogoAlt}></img></a>
                <a alt="resume" target="_blank" href="../img/resume-nathan-keeys.pdf"><img className="resumeIcon icon" src={resumeLogoAlt}></img></a>
                <a alt="music" target="_blank" href="https://80cacao.bandcamp.com/"><img className="codepenIcon icon" src={musicLogo}></img></a>
            </ul>
            <small>Built by Nathan Keeys | Copyright 2020</small>
        </Container>
        </div>
      </div>
    );
  }

export default Footer;