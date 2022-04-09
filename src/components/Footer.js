import React from "react";

import Container from "./Container";

function Footer() {
	return (
		<div className="Bio footer">
			<div className="justify-content-center">
				<Container>
					<ul>
						<a alt="medium" target="_blank" rel="noopener noreferrer" href="https://medium.com/@natekeeys">
							Publications
						</a>
						<a alt="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/natekeeys">
							Twitter
						</a>
						<a alt="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nathan-keeys-73971b3a/">
							LinkedIn
						</a>
						<a alt="studio" target="_blank" rel="noopener noreferrer" href="https://www.digitalanthro.co/">
							Digital Anthro
						</a>
						<a alt="contact" target="_blank" rel="noopener noreferrer" href="mailto:keeysnc@gmail.com">
							Contact
						</a>
					</ul>
					<small>Built by Digital Anthro | Copyright 2022</small>
				</Container>
			</div>
		</div>
	);
}

export default Footer;
