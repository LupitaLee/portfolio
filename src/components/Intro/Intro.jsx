import React from 'react'
import './Intro.css'

const Intro = () => {

    
    return (
        <div>
        {/* <div className="intro-hello">Hello, My name is</div> */}
            <div id='intro' >

            <div className="intro-hello"><h3>Hello, My name is</h3></div>

                <div className='intro-name'>
            
                <h1> Lupita <span style={{ color: '#3c6e71' }}> ✿ </span> Rivera</h1>
                </div>
                
                <div className='intro-tagline'>
                <h3>Full Stack Software Engineer</h3>
                </div>
                
                <div className="intro-bio">
                    <p>
                    Experienced React JS and Ruby on Rails developer with a background in the costumer service industry.
                    </p>
                </div>

            
            
            </div>
        </div>
    )
}

export default Intro
