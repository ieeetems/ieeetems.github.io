import React from 'react-dom';
import {Chip, Grid} from '@material-ui/core';
import "../css/Domains.css";
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import {domainList} from '../static/domainList.js';

export default function Domains() {

    return (
        <Grid 
            container
            className = "domainContainer"
            id="domains"
        >
            <Grid item xs={1} md={2}/>
            <Grid 
                container 
                item xs={10} md={8} 
                justify="center"
            >
                <Grid item className="section-heading">Inter-domain involvement of our members lays the foundation of IEEE TEMS!</Grid>
                <Grid container justify="space-evenly" item xs={12}>
                    {
                        domainList.map( (domainItem) => < Chip label = {domainItem.label} 
                                className = {"domainChip "+domainItem.className}
                                key = {domainItem.label}
                            />
                        )
                    }
                </Grid>
                <Grid container item xs={12} className="domainLegend">
                    <Grid item xs={12} sm={3}>
                    <div> <BubbleChartIcon style={{color: "#94C997"}}/>Content Writing</div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <div> <BubbleChartIcon style={{color: "#058065a3"}}/>Creative</div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <div> <BubbleChartIcon style={{color: " #006650f3"}}/>Management</div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <div> <BubbleChartIcon style={{color: "#023d32"}}/>Tech</div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} md={2}/>
        </Grid>
    );
}