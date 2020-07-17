import React, { useState } from 'react';
import Card from '../components/Card'
import aqiImage from '../img/aqi-gif.gif'
import rp3Image from '../img/rp3agency.jpg'
import nsImage from '../img/ns-hero.jpg'
import adsImage from '../img/ads-hero.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Bio() {

  // let bg = document.body.style.background = "#000000";
  // const [color, changeColor] = useState(bg);

    return (
      <div className="section">
        <div className="section">
        <h1 className="title">Like Water Design Studio</h1>
        <h4 className="subtitle highlight">
          Welcome! My name is <Link alt="home" to="/about">Nathan Keeys,</Link> I'm a software developer and owner of Like Water Design Studio. 
          </h4>
          <p style={{lineHeight: '1.7rem'}}>
          Like Water Design Studio is a UI/UX Design and Web Development Consultancy that specializes in building interactive websites and mobile applications for <b>health and wellness</b>.
          </p>
        </div>
        <div>
          <h1 className="title">Projects</h1>
          <div className="portfolio col-md-12">
              <Card 
              link={"/work/aqi-visualizer"}
              svgWidth={`100%`}
              svgHeight={`100%`}
              xmlns={`xmlns=”http://www.w3.org/2000/svg`}
              viewBox={`0 0 100 100`}
              imageSrc={aqiImage} 
              caption={ "WebGL Air Quality Index Visualizer" }
              />
              <Card
              link={"/work/rp3agency"}
              svgWidth={`100%`}
              svgHeight={`100%`}
              xmlns={`xmlns=”http://www.w3.org/2000/svg`}
              viewBox={`0 0 100 100`}
              imageSrc={rp3Image}
              caption={ "RP3 Website Redesign" } 
              />
              <Card
              link={"/work/abigails-driving-school"}
              svgWidth={`100%`}
              svgHeight={`100%`}
              xmlns={`xmlns=”http://www.w3.org/2000/svg`}
              viewBox={`0 0 100 100`}
              imageSrc={adsImage} 
              caption={ "Abigail's Driving School Website Redesign" } 
              />              
          </div>
        </div>
      </div>
    );
  }

export default Bio;