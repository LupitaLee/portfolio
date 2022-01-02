import React from 'react'
import {Navbar, Container,Nav} from "react-bootstrap"

const Navigation = () => {
    return (
        <div  >
            <Navbar bg="light" expand="lg"  >
           <Container >
             <Navbar.Brand href="/" style={{ color: '#034078' }} >Portfolio</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
         
                 <Nav.Link href="/about">About</Nav.Link>
                 <Nav.Link href="/projects">Projects</Nav.Link>
                 <Nav.Link href="/resume">Resume</Nav.Link>
                 <Nav.Link href="/contact">Contact</Nav.Link>
                

            
               </Nav>
               
             </Navbar.Collapse>
            
           </Container>
         </Navbar>
        </div>
    )
}

export default Navigation
