import React from 'react';
import Container from './Container';
import CaseStudy from './CaseStudy';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Work(props) {
    return (
      <div className="work">
        <img src={props.hero}></img>
        <Container>
        <Route exact path="/work/aqi-visualizer">
              <CaseStudy
              title={'Air Quality Index Visualizer App'}
              link={'https://keeysnc.github.io/webgl-aqi-location-app/public/'}
              hightlight={'Case Study'} 
              content={'Bad Air Quality is a serious issue for people with respiratory conditions such as asthma, COPD, and Bronchitis. Air Quality awareness is essential for the safety of high-risk individuals. I built a small scale app that utilizes the BreezoMeter Air Quality Index API and Google Places API to render weather information based on the user’s location.'} 
              media={ '<iframe src="https://player.vimeo.com/video/428566933" width="100%" height="600px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'}
              />
            </Route>
            <Route exact path="/work/rp3agency">
              <CaseStudy
              title={'RP3 Website'}
              link={'https://rp3agency.com'}
              hightlight={'Case Study'} 
              content={'While working for RP3 Agency, I had to great opportunity to help design and develop their new website. As part of the creative technology team, I was responsible for front-end prototyping and site building in Drupal 8.'} 
              />
            </Route>
            <Route exact path="/work/abigails-driving-school">
              <CaseStudy
              title={'Abigail\'s Driving School'}
              link={'https://abigailsdrivingschool.com'}
              hightlight={'Case Study'} 
              content={'Abigail\'s Driving School brought me on board to help with the re-branding and development of their new website. '} 
              />
            </Route>
            <Route exact path="/work/noise-generator">
              <CaseStudy
              title={'Plane Noise Generator'}
              link={'https://keeysnc.github.io/plane-noise-generator/public/'}
              hightlight={'Case Study'} 
              content={'I created a tool that allows users to create and export generative art patterns from a 3D Plane. This application uses Perlin Noise to warp the 3D plane. Using the parameters on the top right, anyone can fine-tune the strength of the noise frequencies. Using this tool, artists and designers can experiment with new design patterns and export the final art for print use. '} 
              />
            </Route>
        </Container>
      </div>
    );
  }

export default Work;