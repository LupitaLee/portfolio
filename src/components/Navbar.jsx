import React from 'react'
import "./Navbar.css"
// import {Dropdown, DropdownButton} from "react-bootstrap"

import { NavHashLink as Link } from 'react-router-hash-link';

// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => {

 

    return (


      <div id='navbar' className='navbar'>


            <div className='home'>
                <Link id='home-btn' smooth to='/#'>L✿R </Link>
             
            </div >

            <div className='link'>
           

               


                <Link class="active" smooth  to="/#about">About</Link>

                <Link smooth  to="/#project">Projects</Link>

                <Link smooth to="/#experience">Experience</Link>

                <Link smooth to="/#contact">Contact</Link>
            </div>

       

        </div>


    )
}

export default Navigation
