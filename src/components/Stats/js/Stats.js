import { Grid } from '@material-ui/core';
import React from 'react';
import "../css/Stats.css";
import { Waypoint } from 'react-waypoint';

export default function Stats() {

    function animateValue(id, start, end, duration) {
        if (start === end) return;
        let range = end - start;
        let current = start;
        let increment = end > start? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let obj = document.getElementById(id);
        let timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current+"+";
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    let visited=false;
    function animateStats() {
        if(!visited)
        {
            animateValue("eventCount", 0, 70, 3000);
            animateValue("megaEventCount", 0, 7, 3000);
            animateValue("coreMemberCount", 0, 100, 3000);
            visited=true;
        }
    }

    return(
        <Waypoint onEnter={animateStats} bottomOffset="30%">
            <Grid
                container
                className="statsContainer"
                id="stats"
            >
                <Grid item xs={1}/>
                <Grid container item xs={10} >
                    <Grid container item xs={12} justify="center">
                        <div className="section-heading">The premier resource of essential interpersonal Skills</div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Grid item xs={12} md={3} className="statItem">
                            <div className="counter" id="coreMemberCount">0</div>
                            <div className="sub-heading">Members</div>
                            <div className = "content">A community of people from different branches & domains </div>
                        </Grid> 
                        <Grid item xs={12} md={3} className="statItem">
                            <div className="counter" id="eventCount">0</div>
                            <div className="sub-heading">Events</div>
                            <div className = "content">Classroom and online sessions with multiple outreach programs</div>
                        </Grid> 
                        <Grid item xs={12} md={3} className="statItem">
                            <div className="counter" id="megaEventCount">0</div>
                            <div className="sub-heading">Mega Events</div>
                            <div className = "content">Includes technical & Non-technical workshops, Value added programs & many more!</div>
                        </Grid>
                        <Grid item xs={12} md={3} className="statItem">
                            <div className="counter">Many</div>
                            <div className="sub-heading">Collaborations</div>
                            <div className = "content">Experts from tech giants sharing their expertise</div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Waypoint>
    )
}