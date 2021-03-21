import React, {useEffect, useState} from 'react';
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
import {Fab, Zoom, makeStyles, useScrollTrigger, Chip} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { animateScroll as scroll } from "react-scroll";
import Carousel from './components/carousel/js/carousel';
import Blog from './components/blogs/js/blog';

function App(props) {

	const [view, changeView] = useState('home');
	useEffect(()=>setTimeout(fadeOverlay,1500));

	const fadeOverlay = () => {
		if(view==='home')
		document.querySelector("#app").classList.add("fade");
	};
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
	if( view === 'results')
	return(
		<Results changeView = {changeView}/>
	)
	return (
		<>
			<div className="App">
				<div className="temsSplash" id="app">
					<img src={logo} className="logo" alt="IEEE TEMS VIT"/>
				</div>
				<span id="back-to-top-anchor"></span>
				<About />
				<div className = "recruitmentResults">
				{/* <Chip 
					clickable 
					className="recruitmentResultsButton"
					label ="Recruitment Results"
					onClick = {()=> changeView('results')}
				/> */}
				</div>
				<Stats />
				<OnBoard />
				<Domains />
				<Carousel />
				<Events />
				{/* <Veiwpdf /> */}
				{/* <Model /> */}
				<Blog />
				<Board />
				<Contact />
				<ScrollTop {...props}>
				<Fab style = {{color:"white"}} size="medium" aria-label="scroll back to top">
					<KeyboardArrowUpIcon style = {{color:"#006C54"}}/>
				</Fab>
				</ScrollTop>
			</div>
		</>
	);

}

export default App;
