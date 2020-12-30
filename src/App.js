import Slideshow from "./pages/slide";
import About from "./pages/aboutme";
import Bbox from "./pages/backbox";
import Menu from "./pages/menu";
import Galery from "./pages/gallery";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import classnames from "classnames";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Gmap from "./pages/gmap";

export default function App() {
	const [navbarCollapse, setNavbarCollapse] = useState(false);
	const toggleNavbarCollapse = () => {
		setNavbarCollapse(!navbarCollapse);
		// document.documentElement.classList.toggle("nav-open");
	  };
	const tt = navbarCollapse ? "collapsed": "";
	const show = navbarCollapse ? "show": "";

  return (
	<Router>
    <div>
    <header className="top-navbar">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src="images/logo.png" alt="logo" />
				</Link>
				<button className={classnames("navbar-toggler",tt)} 
					type="button" data-toggle="collapse" data-target="#navbars-rs-food" 
					aria-controls="navbars-rs-food" onClick={toggleNavbarCollapse} 
					aria-expanded={navbarCollapse} aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className={classnames("navbar-collapse collapse",show)} id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><Link className="nav-link" to="/">Anasayfa</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/about">Hakkımızda</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<Switch>
		<Route exact path="/">
  			<Slideshow />
			<About/>
			<Bbox/>
			<Menu/>
			<Galery/>
			<Contact/>
			<Gmap/>
			<Footer/>
		</Route>
		<Route path="/about">
			
		</Route>
  	</Switch>
  </div>
  </Router>
  );
}