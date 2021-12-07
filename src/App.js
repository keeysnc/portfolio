import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Children } from "react";
import Portfolio from "./pages/Portfolio";
import Epk from "./pages/Epk";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Container>
						<ul>
							<Link className="logoName" alt="home" to="/">
								Home
							</Link>
							<div className="pull-right">
								<Link alt="epk" to="/80percentcacao">
									80% Cacao EPK
								</Link>
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
							</div>
						</ul>
					</Container>
				</header>

				<Switch>
					<Route exact path="/">
						<Portfolio>{Children}</Portfolio>
					</Route>
				</Switch>

				<Switch>
					<Route exact path="/80percentcacao">
						<Epk>{Children}</Epk>
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
