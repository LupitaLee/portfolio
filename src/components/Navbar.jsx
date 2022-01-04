import React from 'react'
import "./Navbar.css"
// import {Navbar, Container,Nav} from "react-bootstrap"

import { NavHashLink as Link } from 'react-router-hash-link';

const Navigation = () => {

 

    return (


      <div id='navbar' className='navbar'>
            <div className='home'>
                <Link id='home-btn' smooth to='/#'>L✿R </Link>
                {/* <button onClick={scrollToTop}>♦</button> */}
            </div>
            <div className='link'>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="/#about">About</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="/#project">Projects</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="/#experience">Experience</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="/#contact">Contact</Link>
            </div>
        </div>


    )
}

export default Navigation
