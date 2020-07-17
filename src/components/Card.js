import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Card(props) {

    return (
        <div className="card col-md-6">
            <Link to={props.link}>
            <img className="proj-image" src={props.imageSrc}></img>
            </Link>
        <h6 style={{marginTop: '5px'}}>{props.caption}</h6> 
        </div>
    )
}

export default Card;