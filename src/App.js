import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Container from './components/Container';
import aqiHero from './img/aqi-hero.png'
import adsHero from './img/ads-hero.jpg'
import rp3Hero from './img/rp3Hero.jpg'
import noiseHero from './img/noise-generator.jpg'
import codePenLogo from './img/codepen.svg'
import mediumLogo from './img/medium.svg'
import resumeLogo from './img/resume.svg'
import homeLogo from './img/home.svg'
import aboutLogo from './img/about-logo.svg'
import musicLogo from './img/80percent-logo.svg'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router basename ="/">
      <div className="App">
        <header className="App-header">
          <Container>
            <ul>
              <Link alt="home" to="/"><img className="homeIcon" src={homeLogo}></img></Link>
              <div className="pull-right">
                <Link alt="about" to="/about"><img className="aboutIcon" src={aboutLogo}></img></Link>
                <a alt="codepen" target="_blank" href="https://codepen.io/lwdstudio"><img className="codepenIcon icon" src={codePenLogo}></img></a>
                <a alt="medium" target="_blank" href="https://medium.com/@likewaterdesignco"><img className="mediumIcon icon" src={mediumLogo}></img></a>
                <a alt="resume" target="_blank" href={process.env.PUBLIC_URL + '/resume.pdf'}><img className="resumeIcon icon" src={resumeLogo}></img></a>
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
            <Route exact path="/work/aqi-visualizer">
              <Work hero={aqiHero} />
            </Route>
            <Route exact path="/work/rp3agency">
              <Work hero={rp3Hero}/>
            </Route>
            <Route exact path="/work/abigails-driving-school">
              <Work hero={adsHero}/>
            </Route>
            <Route exact path="/work/noise-generator">
              <Work hero={noiseHero}/>
            </Route>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
