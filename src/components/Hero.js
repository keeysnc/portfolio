import React from "react";
import { useHistory } from "react-router-dom";
import Container from "./Container";
import Social from "./Social";

const Hero = ({ heading, link, linkName, img }) => {
	const history = useHistory();

	const linkUrl = "https://www.digitalanthro.co";
	return (
		<div className={history.location.pathname === "/80percentcacao" ? "hero epkBg" : "hero"}>
			<Container>
				<div className="header">
					<h1 className="title">
						{heading}
						<a className="header-link" target="_blank" rel="noopener noreferrer" href={linkUrl}>
							{linkName}
						</a>
					</h1>
					{history.location.pathname === "/80percentcacao" ? <Social /> : null}
				</div>
			</Container>
		</div>
	);
};

export default Hero;
