import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from "react-scroll";
import '../css/Navbar.css';

function Navbar(props){
    return(
        <Breadcrumbs 
            maxItems={2} 
            aria-label="breadcrumb"
            className = "navbar"
        >
            <Link 
                className = 'link' 
                underline = 'none'
                to="about"
                spy={true}
                smooth={true}
                duration={500}
            >
                About
            </Link>
            <Link 
                className = 'link' 
                underline = 'none'
                to="domains"
                spy={true}
                smooth={true}
                duration={500}
                
            >
                Domains
            </Link>
            
            <Link 
                className = 'link' 
                underline = 'none'
                to="events"
                spy={true}
                smooth={true}
                duration={500}
                
            >
                Events
            </Link>
            <Link 
                className = 'link' 
                underline = 'none'
                to="events"
                spy={true}
                smooth={true}
                duration={500}
                
            >
                Blogs
            </Link>
            <Link 
                className = 'link' 
                underline = 'none' 
                to="board"
                spy={true}
                smooth={true}
                duration={1000}   
            >
                Team
            </Link>
            <Link 
                className = 'link' 
                underline = 'none' 
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}   
            >
                Contact
            </Link>
        </Breadcrumbs>
    );
}
export default Navbar