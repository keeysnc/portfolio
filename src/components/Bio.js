import React, { useState } from 'react';
import Card from '../components/Card'
import aqiImage from '../img/aqi-gif.gif'
import rp3Image from '../img/rp3agency.jpg'
import nsImage from '../img/ns-hero.jpg'
import adsImage from '../img/ads-hero.jpg'
import {
  HashRouter as Router,
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
        <h1 className="title">Hi! My name is <Link alt="home" to="/about">Nathan Keeys,</Link> I'm a creative technologist, music artist and owner of <Link alt="home" to="/about">Like Water Design Studio</Link>. </h1>
        <h4 className="subtitle"></h4>
          <p style={{lineHeight: '1.7rem'}}>
          This website showcases a mix of self-initiated and collaborative projects throughout my years as a developer.
          I have a passion for continuous learning which has fueled my excitement to learn about newcoming technologies, and the creative
          ways humans interact with them.
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