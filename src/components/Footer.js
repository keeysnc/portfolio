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
                <a alt="codepen" target="_blank" href="https://codepen.io/natekeeys">Codepen</a>
                <a alt="medium" target="_blank" href="https://medium.com/@natekeeys">Medium</a> 
                <a alt="linkedin" target="_blank" href="https://www.linkedin.com/in/nathan-keeys-73971b3a/">LinkedIn</a>     
            </ul>
            <p>Built by Nathan Keeys | Copyright 2021</p>
        </Container>
        </div>
      </div>
    );
  }

export default Footer;