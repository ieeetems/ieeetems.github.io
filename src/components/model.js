import React from 'react'
import ReactDom from "react-dom"
import Veiwpdf from './pdfviewer/js/veiwpdf'
import CloseIcon from '@material-ui/icons/Close';

import "./model.css"
import { Fab } from '@material-ui/core';
const pdfModel = document.getElementById("model");
function Model(props) {
    return ReactDom.createPortal(
        <React.StrictMode>
            <div className="wrapper">
                <Fab  style = {{color:"white",margin:"20px",float:"right"}} onClick={props.onClose} size="medium">   
                    <CloseIcon className="close" color="primary" />
                </Fab>
                <Veiwpdf/>
            </div>
        </React.StrictMode>, pdfModel)
}

export default Model
