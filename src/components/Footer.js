import React from "react";

import Container from "./Container";

function Footer() {
	return (
		<div className="Bio footer">
			<div className="justify-content-center">
				<Container>
					<ul>
						<a alt="epk" target="_blank" rel="noopener noreferrer" href="https://codepen.io/natekeeys">
							80% Cacao EPK
						</a>
						<a alt="codepen" target="_blank" rel="noopener noreferrer" href="https://www.digitalanthro.co/">
							Digital Anthro
						</a>
						<a alt="medium" target="_blank" rel="noopener noreferrer" href="https://medium.com/@natekeeys">
							Publications
						</a>
						<a alt="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/natekeeys">
							Twitter
						</a>
						<a alt="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nathan-keeys-73971b3a/">
							LinkedIn
						</a>
					</ul>
					<small>Built by Digital Anthro | Copyright 2022</small>
				</Container>
			</div>
		</div>
	);
}

export default Footer;
