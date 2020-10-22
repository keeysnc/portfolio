import React from 'react';
import './App.css';
import Bio from './components/Bio';
import About from './components/About';
import Footer from './components/Footer';
import Container from './components/Container';
import codePenLogoAlt from './img/codepen-alt.svg'
import mediumLogoAlt from './img/medium-alt.png'
import aboutLogo from './img/about-logo-alt.svg'
import musicLogo from './img/80percent-logo.svg'
import homeLogo from './img/lwd-logo.svg'


import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container>
            <ul>
              <Link alt="home" to="/"><img className="homeIcon" src={homeLogo}></img></Link>
              <div className="pull-right">
              <Link alt="about" to="/about"><img className="aboutIcon icon" src={aboutLogo}></img></Link>
                <a alt="codepen" target="_blank" href="https://codepen.io/lwdstudio"><img className="codepenIcon icon-alt" src={codePenLogoAlt}></img></a>
                <a alt="medium" target="_blank" href="https://medium.com/@likewaterdesignco"><img className="mediumIcon icon-alt" src={mediumLogoAlt}></img></a>
                <a alt="music" target="_blank" href="https://80cacao.bandcamp.com/"><img className="codepenIcon icon" src={musicLogo}></img></a>
              </div>
            </ul>
          </Container>
        </header>

        <Container>
          <Switch>
            <Route exact path="/">
              <Bio/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch>
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
