import React from "react";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Container from "../components/Container";

const Portfolio = () => {
	return (
		<>
			<Container>
				<Hero heading="Fullstack Javascript Developer / Creative Developer" link="www.digitalanthro.co" linkName="Digital Anthro." />
				<Bio />
			</Container>
		</>
	);
};

export default Portfolio;
