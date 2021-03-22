import React,{useState} from 'react';
import BoardItem from './BoardItem';
import {Grid} from '@material-ui/core';
import {boardList_20,boardList_21} from '../static/boardDetails';
import venugopal from '../static/venugopal.jpg';
import subashini from '../static/subashini.jpg';

export default function Board() {
    const [year,setYear] =useState(2021);
    const BoardRows = function() {
        let rows=[];
        let boardCount=0;
        let boardList=[];
        if(year === 2020){
            boardCount = boardList_20.length;
            boardList = boardList_20;
        }else if(year === 2021){
            boardCount = boardList_21.length;
            boardList= boardList_21;
        }else{
            boardCount = boardList_21.length;
            boardList= boardList_21;
        }
        for(let i=0; i<boardCount; i++) 
            rows.push(
                <Grid 
                    item 
                    xs={12} sm={ (i<3) ? 4 : 3 }
                    key = {i}
                >
                    <BoardItem 
                        designation = {boardList[i].designation}
                        name = {boardList[i].name}
                        imageSrc = {boardList[i].imageSrc}
                        linkedInProfile = {boardList[i].linkedInProfile}
                    />
                </Grid>
            );
        return rows;
    }();
    return (
        <Grid 
            container
            justify = "center"
            className = "boardContainer"
            id = "board"
        >
            <Grid item xs={1}/>
            <Grid container item xs={8} justify="space-evenly" alignItems="center">
                <Grid item xs={12} className = "head">
                    <h1>TEAM</h1>
                    <p>
                    <b  className = "subhead" style={{marginLeft:"5px",cursor:"pointer"}} onClick={()=>setYear(2021)}>Board - 2021 </b>  | 
                    <b  className = "subhead" style={{marginRight:"5px",cursor:"pointer"}} onClick={()=>setYear(2020)}> Board - 2020</b>
                    </p>
                </Grid>
                <Grid container item xs={12} className="boardRow">
                    {BoardRows.slice(0,3)}
                </Grid>
                <Grid container item xs={12} className="boardRow">
                    {BoardRows.slice(3,7)}
                </Grid>
                <Grid container item xs={12} className="boardRow">
                    {BoardRows.slice(7)}               
                </Grid>
                <Grid container item xs={12} className = "facultyRow">
                    <Grid item xs={12} sm={3}/>
                    <Grid 
                        item 
                        xs={12} sm={3}
                    >
                        <BoardItem 
                            designation = "Faculty Coordinator"
                            name = "Dr. Venugopal P"
                            imageSrc = {venugopal}
                            linkedInProfile = "https://www.linkedin.com/in/dr-pulidindi-venugopal-65230337/"
                        />
                    </Grid>
                    <Grid 
                        item 
                        xs={12} sm={3}
                    >
                        <BoardItem 
                            designation = "Faculty Coordinator"
                            name = "Subashini R"
                            imageSrc = {subashini}
                            linkedInProfile = "https://www.linkedin.com/in/subashini-rajagopal-b97319139/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}/>
                </Grid>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    );
}