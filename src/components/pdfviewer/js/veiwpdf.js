import React,{useRef,useEffect} from 'react'
import "../css/veiwpdf.css"
import WebViewer from "@pdftron/webviewer"
import Blog1 from "../pdfs/blog1.pdf"
function Veiwpdf({props}) {
    const viewer = useRef(null);
    useEffect(()=>{
        WebViewer({path: "lib",initialDoc:Blog1},viewer.current).then(res=>{
        })
    },[])
    return (
        
            <div ref={viewer} class="pfdviewer">
            
            </div> 
        
        
    )
}

export default Veiwpdf
