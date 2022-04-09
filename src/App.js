import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Children } from "react";
import Portfolio from "./pages/Portfolio";
import Epk from "./pages/Epk";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className="App">
				<header className="App-header">
					<Container>
						<ul>
							<Link className="logoName" alt="home" to="/">
								Home
							</Link>
							<div className="pull-right">
								<a alt="medium" target="_blank" rel="noopener noreferrer" href="https://medium.com/@natekeeys">
									Publications
								</a>
								<a alt="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nathan-keeys-73971b3a/">
									LinkedIn
								</a>
								<a alt="creative studio" target="_blank" rel="noopener noreferrer" href="https://www.digitalanthro.co/">
									Digital Anthro
								</a>
								<a alt="contact" target="_blank" rel="noopener noreferrer" href="mailto:keeysnc@gmail.com">
									Contact
								</a>
							</div>
						</ul>
					</Container>
				</header>

				<Switch>
					<Route exact path="/">
						<Portfolio>{Children}</Portfolio>
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
