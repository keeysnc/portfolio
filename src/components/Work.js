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
              media={ '<iframe src="https://player.vimeo.com/video/428566933" width="100%" height="600px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'}
              problem={'As an asthmatic myself I suffer from shortness of breath due to certain weather conditions such as humidity and extreme heat.'} 
              solution={'I build an app that utilizes the breezometer real time AQI (Air quality index) api and google places api to render AQI information based on the users location.'}
              interface={'I wanted the app to be more engaging then just a static UI so I turned to Three.js and utilized their glsl pass classes to create the wireframe visuals. The Standard AQI comes with a color system from "Maroon - Hazardous" to "Green - Good". When a user submits their location a rotating visual populates along with the color of the AQI status.'}
              />
            </Route>
            <Route exact path="/work/rp3agency">
              <CaseStudy
              title={'RP3 Website'}
              link={'https://rp3agency.com'}
              hightlight={'Case Study'} 
              body={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
              />
            </Route>
            <Route exact path="/work/abigails-driving-school">
              <CaseStudy
              title={'Abigails Driving School'}
              link={'https://abigailsdrivingschool.com'}
              hightlight={'Case Study'} 
              body={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
              />
            </Route>
        </Container>
      </div>
    );
  }

export default Work;