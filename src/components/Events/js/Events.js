import { Chip, Grid } from '@material-ui/core';
import React from 'react';
import "../css/Events.css";

export default function Events() {
    return(
        <Grid 
            container
            className = "eventsContainer"
            direction="column"
            id="events"
        >
            <Grid container item>
                <Grid item xs={1} md={2} />
                <Grid item xs={10} md={8} className="section-heading">A few mile stones of our journey!</Grid>
                <Grid item xs={1} md={2} />
            </Grid>
            <Grid container item>
                <Grid item md={2} />
                <Grid container item xs={12} md={8}>
                    <Grid item xs={12} className="eventItem">
                        <div className="fb-post" data-href="https://www.facebook.com/temsvitu/posts/3767321359961361" data-width="auto" data-show-text="true">
                            <blockquote cite="https://www.facebook.com/temsvitu/posts/3767321359961361" className="fb-xfbml-parse-ignore">
                                Posted by <a href="https://www.facebook.com/temsvitu/">IEEE TEMS VIT</a> on&nbsp;
                                <a href="https://www.facebook.com/temsvitu/posts/3767321359961361">Wednesday, 5 August 2020</a>
                            </blockquote>
                        </div>
                    </Grid> 
                    <Grid item xs={12} className="eventItem">
                        <div className="fb-post" data-href="https://www.facebook.com/temsvitu/posts/3232521540108015" data-width="auto" data-show-text="true">
                            <blockquote cite="https://www.facebook.com/temsvitu/posts/3232521540108015" className="fb-xfbml-parse-ignore">
                                <p>The outreach program &#039;Make the world a Better place&#039; 
                                    from IEEE TEMS in association with Leo club turned out to a...</p>Posted by 
                                    <a href="https://www.facebook.com/temsvitu/">IEEE TEMS VIT</a> on&nbsp;
                                    <a href="https://www.facebook.com/temsvitu/posts/3232521540108015">Friday, 10 January 2020</a>
                            </blockquote>
                        </div>
                    </Grid>    
                    <Grid item xs={12} className="eventItem">
                        <div className="fb-post" data-href="https://www.facebook.com/temsvitu/posts/3045921905434647" data-width="auto" data-show-text="true">
                            <blockquote cite="https://www.facebook.com/temsvitu/posts/3045921905434647" className="fb-xfbml-parse-ignore">
                                <p>&quot;No one can whistle a symphony. It takes a whole orchestra to play it.&quot;
                                    .
                                    .
                                    .
                                    In a journey to success, it&#039;s &quot;WE&quot; that...</p>Posted by 
                            <a href="https://www.facebook.com/temsvitu/">IEEE TEMS VIT</a> on&nbsp;
                            <a href="https://www.facebook.com/temsvitu/posts/3045921905434647">Wednesday, 23 October 2019</a>
                            </blockquote>
                        </div>
                    </Grid>  
                    <Grid item xs={12} className="eventItem">
                        <div className="fb-post" data-href="https://www.facebook.com/temsvitu/posts/2666314926728682" data-width="auto" data-show-text="true">
                            <blockquote cite="https://www.facebook.com/temsvitu/posts/2666314926728682" className="fb-xfbml-parse-ignore">
                                <p>Glimpses of Henry Harvin Education&#039;s &#039;Certified Python Business Analyst&#039; 
                                    (CPBA) Course - PYTHON BASED DATA ANALYSIS...
                                </p>Posted by 
                                <a href="https://www.facebook.com/temsvitu/">IEEE TEMS VIT</a> on&nbsp;
                                <a href="https://www.facebook.com/temsvitu/posts/2666314926728682">Sunday, 7 April 2019</a>
                            </blockquote>
                        </div>
                    </Grid>  
                </Grid>
                <Grid item md={2} />
            </Grid>
            <Grid item>
                <Chip label="Click to follow our journey" className="moreButton" onClick={()=>window.open("https://www.facebook.com/temsvitu")}/>
            </Grid>
        </Grid>
    );
}