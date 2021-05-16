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
              <Link className="logoName" alt="home" to="/"><b>Nathan Keeys</b></Link>
              <div className="pull-right">
                <a alt="codepen" target="_blank" href="https://codepen.io/natekeeys">Codepen</a>
                <a alt="medium" target="_blank" href="https://medium.com/@natekeeys">Medium</a> 
                <a alt="linkedin" target="_blank" href="https://www.linkedin.com/in/nathan-keeys-73971b3a/">LinkedIn</a>     
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
          {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch> */}
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
