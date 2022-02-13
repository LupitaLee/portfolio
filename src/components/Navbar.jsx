import React from 'react'
// import "./Navbar.css"


import { NavHashLink as Link } from 'react-router-hash-link';

import { Navbar, Container, FormControl, Nav, Dropdown, NavDropdown , Offcanvas, Form, Button} from 'react-bootstrap'



const Navigation = () => {

 

    return (


      // <div id='navbar' className='navbar'>

      //       <div className='home'>
      //           <Link id='home-btn' smooth to='/#'>L✿R </Link>
             
      //       </div >

      //       <div className='link'>

      //           <Link class="active" smooth  to="/#about">About</Link>

      //           <Link smooth  to="/#project">Projects</Link>

      //           <Link smooth to="/#experience">Experience</Link>

      //           <Link smooth to="/#contact">Contact</Link>
      //       </div>

      //   </div>


//     <div>

// <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="/#">L✿R</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className='me-auto' >
      
     
        
//                     <Link  className="active" smooth  to="/#about">About</Link>

//                     <Link smooth  to="/#project">Projects</Link>

//                     <Link smooth to="/#experience">Experience</Link>

//                     <Link smooth to="/#contact">Contact</Link>

           
            

       
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
        
//     </div>




<div>
<Navbar   className="navbar navbar-dark "  aria-controls="navbarScroll" style={{ backgroundColor: 'hsla(233, 100%, 14%)'  }}fixed="top"  expand="lg">
  <Container  fluid>
  
    <Navbar.Brand className ="fw-bolder" className="fs-4" as={Link} to="/#">L✿R</Navbar.Brand>
   
    
    <Navbar.Toggle  aria-controls="navbarScroll" />
    </Container> 

    <Container  fluid>
  </Container> 
  
     <Container  > 
    <Navbar.Collapse className="d-center" id="navbarScroll">
   
   
      <Nav 
      className="fs-4"
        // className=" my-2 my-lg-4"
        style={{ maxHeight: '150px'  }}
        navbarScroll
      >
      
        <Nav.Link  as={Link} to="/#about">About</Nav.Link>
        <Nav.Link as={Link} to="/#project">Project</Nav.Link>
        <Nav.Link as={Link} to="/#experience">Experience</Nav.Link>
        <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>

      </Nav>
     
     
    </Navbar.Collapse>
  </Container>
 
</Navbar>

</div>


    )
}

export default Navigation
