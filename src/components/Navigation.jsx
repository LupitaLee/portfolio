import React from 'react'
import {Navbar, Container,Nav} from "react-bootstrap"

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
           <Container>
             <Navbar.Brand href="/">Portfolio</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
         
                 <Nav.Link href="/about">About</Nav.Link>
                 <Nav.Link href="/login">Projects</Nav.Link>
                 <Nav.Link href="/login">Experience</Nav.Link>
                 <Nav.Link href="/signup">Contact</Nav.Link>
                

            
               </Nav>
               
             </Navbar.Collapse>
            
           </Container>
         </Navbar>
        </div>
    )
}

export default Navigation
