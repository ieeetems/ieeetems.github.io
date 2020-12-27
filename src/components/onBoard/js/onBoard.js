import React, { useState } from 'react';
import "../css/onBoard.css";
import learn from '../learn.svg';
import progress from '../progress.svg';
import lead from '../lead.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon  from '@material-ui/icons/ArrowLeft';
import { IconButton } from '@material-ui/core';

export default function OnBoard() {  
    localStorage.setItem('isFirstVisitor', true);
    const [page, setPage] = useState(1);
    const img = (page===1)? learn: ( page===2 ? progress : lead); 
    const caption = (page===1)? "LEARN": ( page===2 ? "PROGRESS" : "LEAD"); 
    const style = {
        controls : {
            color: (page===2) ? "#FFFFFF" : "#3F3D56",
            fontSize: "50"
        },
        controlLeft: {
            display: (page===1) ? "none" : "block"
        },
        controlRight: {
            display: (page===3) ? "none" : "block"
        },
        onBoard : {
            backgroundColor: (page===2) ? "#006C54" : "#E3E6DA"
        },
        caption : {
            color: (page===2) ? "#FFFFFF" : "#3F3D56",
        }
    };
    
    return (
        <>
            <div className="onBoard" style={style.onBoard} id="mission">           
                <img src={img} alt="learn" className="imgOnBoard"/>
                <h1 className="caption" style={style.caption}>{caption}</h1>
                <div 
                    className="control-left" 
                    style={style.controlLeft}
                    onClick = {()=>setPage(page-1)}
                >
                    <IconButton>
                        <ArrowLeftIcon style={style.controls}/>
                    </IconButton>
                </div>
                <div 
                    className="control-right" 
                    style={style.controlRight}
                    onClick = {()=>setPage(page+1)}
                > 
                    <IconButton>
                        <ArrowRightIcon style={style.controls}/>
                    </IconButton>
                </div>               
            </div>
        </>
    );
}