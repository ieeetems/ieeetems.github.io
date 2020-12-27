import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import logo from '../../../logo.png';
import '../css/results.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {resultList} from '../static/results.js';
import HomeIcon from '@material-ui/icons/Home';

export default function RecResults(props) {
    const rows = resultList;
    return(
        <Grid 
            container
            className = "resultsContainer"
        >
            <Grid item xs={12}>
                <a href="https://ieeetemsvit.org">
                    <img src={logo} className="logoSmall" alt="logo"/>
                </a>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <h1 className="resultHead">WELCOME ABOARD! <br/> CORE COMMITTEE 2021</h1>
                <p className = "resultSubHead">
                    Looking forward for a wonderful journey ahead!
                </p>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <TableContainer component={Paper} className = "resultTable">
                    <Table size="small" aria-label="a dense table" >
                        <TableHead className = "thead">
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Reg. No.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id} className = "trow">
                                    <TableCell align="center" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center" scope="row">{row.reg}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={12}>
                <IconButton onClick={()=>props.changeView('home')}>
                    <HomeIcon style={{color:"white"}} fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    );
}