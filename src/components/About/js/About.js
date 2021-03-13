import { Grid } from '@material-ui/core';
import React from 'react';
import Navbar from '../../NavBar/js/NavBar';
import '../css/About.css';
import logo from '../../../logo.png';

export default function About() {
    return(
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="aboutContainer"
            id="about"
        >
            <Grid item >
                <Navbar />
            </Grid>
            <Grid item>
                <img src={logo} className="navLogo" alt="IEEE TEMS VIT"/>
            </Grid>
            <Grid container>
                <Grid item xs={1}/>
                <Grid item className="bannerContainer" xs={10}>
                    <h1 className="bannerTitle">BRIDGING DIVERSE PRINCIPLES</h1>
                    <p className = "bannerCaption">
                        Encapsulating technology and engineering management principles.<br/> We (IEEE Technology & Engineering Management Society) aim
                        to advance, enhance, and improve essential management and leadership skills of people.
                    </p>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Grid>

    );
}