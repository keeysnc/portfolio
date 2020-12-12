import React from 'react';
import {
  Link
} from "react-router-dom";
import Container from './Container';
import codePenLogoAlt from '../img/codepen-alt.svg'
import mediumLogoAlt from '../img/medium-alt.png'
import aboutLogo from '../img/about-logo-alt.svg'
import musicLogo from '../img/80percent-logo.svg'

function Footer() {
    return (
      <div className="Bio footer">
        <div className="justify-content-center">
        <Container>
            <ul>
                <Link alt="about" to="/about"><img className="aboutIcon icon" src={aboutLogo}></img></Link>
                <a alt="codepen" target="_blank" href="https://codepen.io/nate_wav"><img className="codepenIcon icon-alt" src={codePenLogoAlt}></img></a>
                <a alt="medium" target="_blank" href="https://medium.com/@likewaterdesignco"><img className="mediumIcon icon-alt" src={mediumLogoAlt}></img></a>
                <a alt="music" target="_blank" href="https://80cacao.bandcamp.com/"><img className="codepenIcon icon" src={musicLogo}></img></a>
            </ul>
            <small>Copyright 2020</small>
        </Container>
        </div>
      </div>
    );
  }

export default Footer;