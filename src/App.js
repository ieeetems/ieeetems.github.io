import React, {useEffect} from 'react';
import './App.css';
import logo from '../src/logo.png';
import OnBoard from './components/onBoard/js/onBoard';
import About from './components/About/js/About';
import Stats from './components/Stats/js/Stats';
import Domains from './components/Domains/js/Domains';
import Board from './components/Board/js/BoardContainer';
import Events from './components/Events/js/Events';
import Contact from './components/Contact/js/contactContainer.js';
import Results from './components/RecruitmentResults/js/RecruitmentResults.js';
import {Fab, Zoom, makeStyles, useScrollTrigger, Chip } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App(props) {

	const fadeOverlay = () => {
		document.querySelector("#app").classList.add("fade");
	};
	
	useEffect(()=>setTimeout(fadeOverlay,1500));

	const useStyles = makeStyles((theme) => ({
		root: {
		position: 'fixed',
		bottom: theme.spacing(3),
		right: theme.spacing(5),
		},
	})); 

	function ScrollTop(props) {
		const { children} = props;
		const classes = useStyles();

		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 100,
		});
	
		const handleClick = (event) => {
			scroll.scrollToTop();
		};
	
		return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
			{children}
			</div>
		</Zoom>
		);
	}

	return (
		<Router>
			<div className="temsSplash" id="app">
				<img src={logo} className="logo" alt="hi"/>
			</div>
			<Switch>
				<Route path="/temsvit">
					<div className="App">
						<span id="back-to-top-anchor"></span>
						<About />
						<div className = "recruitmentResults">
							<Link to = "/results" className="resultsLink">
								<Chip 
									clickable 
									className="recruitmentResultsButton"
									label ="Recruitment Results"
								/>
							</Link>
						</div>
						<Stats />
						<OnBoard />
						<Domains />
						<Events />
						<Board />
						<Contact />
						<ScrollTop {...props}>
						<Fab style = {{color:"white"}} size="medium" aria-label="scroll back to top">
							<KeyboardArrowUpIcon style = {{color:"#006C54"}}/>
						</Fab>
						</ScrollTop>
					</div>
				</Route>
				<Route to="/results">
					<Results />
				</Route>
			</Switch>
		</Router>
	);

}

export default App;
