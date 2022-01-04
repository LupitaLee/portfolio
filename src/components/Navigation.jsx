import React from 'react'
import {Navbar, Container,Nav} from "react-bootstrap"

const Navigation = () => {

 

    return (
        <div id="navigation" >
            <Navbar bg="light" expand="lg"  >
           <Container >
             <Navbar.Brand  href="/" style={{ color: '#034078' }} ><span style={{ color: '#1282a2', fontSize:"35px" }}>L✿R </span></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
         
                 <Nav.Link href="/about">About</Nav.Link>
                 <Nav.Link href="/projects">Projects</Nav.Link>
                 <Nav.Link href="/experience">Experience</Nav.Link>
                 <Nav.Link href="/contact">Contact</Nav.Link>
                

            
               </Nav>
               
             </Navbar.Collapse>
            
           </Container>
         </Navbar>
        </div>
    )
}

export default Navigation
