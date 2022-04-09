import React, { useState } from "react";
import profileImg from "../img/profile-pic.jpg";

function About() {
	return (
		<div className="section">
			<div className="col-md-12 row">
				<div className="col-md-6">
					<img className="profile-img" src={profileImg}></img>
				</div>
				<div className="col-md-6 about-content">
					<div className="about"></div>
				</div>
			</div>
		</div>
	);
}

export default About;
