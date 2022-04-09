import React from "react";
import { useHistory } from "react-router-dom";
import Container from "./Container";
import Social from "./Social";

const Hero = ({ heading, link, linkName, img }) => {
	const history = useHistory();

	const linkUrl = "https://www.digitalanthro.co";
	return (
		<div className={"hero"}>
			<Container>
				<div className="header">
					<h1 className="title">{heading}</h1>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
