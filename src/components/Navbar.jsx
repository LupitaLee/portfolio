import React from 'react'
import "./Navbar.css"
// import {Navbar, Container,Nav} from "react-bootstrap"

import { NavHashLink as Link } from 'react-router-hash-link';

const Navigation = () => {

 

    return (


      <div id='navbar' className='navbar'>
            <div className='home'>
                <Link id='home-btn' smooth to='#'>L✿R </Link>
                {/* <button onClick={scrollToTop}>♦</button> */}
            </div>
            <div className='link'>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#about">About</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#projects">Projects</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#experience">Experience</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#contact">Contact</Link>
            </div>
        </div>





        // <div id="navigation" >
        //     {/* <Navbar bg="light" expand="lg"  > */}
        //     <Navbar className='navbar-nav' expand="lg"  >
        //    <Container >
        //      <Navbar.Brand  href="/" style={{ color: '#034078' }} ><span style={{ color: '#1282a2', fontSize:"35px" }}>L✿R </span></Navbar.Brand>
        //      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //      <Navbar.Collapse id="basic-navbar-nav">
        //        <Nav className="me-auto">

              
        
        //          <Nav.Link style={{ color: '#fefcfb',fontSize:"20px"  }}  href="/about">About</Nav.Link>
        //          <Nav.Link style={{ color: '#fefcfb' ,fontSize:"20px" }} href="/projects">Projects</Nav.Link>
        //          <Nav.Link style={{ color: '#fefcfb',fontSize:"20px" }} href="/experience">Experience</Nav.Link>
        //          <Nav.Link style={{ color: '#fefcfb' ,fontSize:"20px"}} href="/contact">Contact</Nav.Link>
               
                 
            
        //        </Nav>
               
        //      </Navbar.Collapse>
            
        //    </Container>
        //  </Navbar>
        // </div>
    )
}

export default Navigation
