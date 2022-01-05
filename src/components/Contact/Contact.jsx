import React from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDev  } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
       
              <div id='contact' >
                <div className='title'>
                    <h3><span style={{ color: '#1282a2' }}>&gt;</span>CONTACT</h3>
                </div>
                <div className='contact-content'>
                    <div className='socials'>


                        <a href='https://www.linkedin.com/in/lupita-rivera/' >
                            <FontAwesomeIcon icon={faLinkedin} className="font-awesome"></FontAwesomeIcon>
                        </a>

                         <a href='https://github.com/LupitaLee'>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                
                        </a>
                        <br></br>
                        <a href='https://dev.to/lupitalee'>
                            <FontAwesomeIcon icon={faDev}></FontAwesomeIcon>
                        </a>

                        <a href='mailto:lupitarivera8899@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </a>
                             
                    </div>
                 
                </div>
            </div>
       
    )
}

export default Contact
