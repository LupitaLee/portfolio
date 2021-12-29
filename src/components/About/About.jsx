import React from 'react'
import "./About.css"

const About = () => {
    const bullet = <span style={{ color: '#3c6e71' }}>♦ </span>
    return (
        <div id='about'>
            <div className='about-title'>
                <h3><span style={{ color: '#353535' }}>&gt;</span> ABOUT ME</h3>
            </div>
            <div className='about-content'>
                <div id='about-text'>
                    <p>
                        In my short time as a software engineer, I have learned to develop quickly, learning new skills. programming languages, problem-solving, and Model View Controller (MVC) methods of organizing code.Experienced with:
                    </p>

                    <ul>
                        <li>{bullet}JavaScript (ES6+)</li>
                        <li>{bullet}React</li>
                        <li>{bullet}Redux</li>
                        <li>{bullet}Ruby on Rails</li>
                        <li>{bullet}Sinatra</li>
                        <li>{bullet}SQL</li>
                        <li>{bullet}HTML / CSS / SASS</li>
                        <li>{bullet}Git / Github</li>
                    </ul>

                    <p>
                        I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head.

                        Yet we never finish learning and there’s certainly more to learn, more problems to solve, and more to build. And for this, I am very grateful.
                        </p>

                    
                </div>

                <div id='photo-div' className='prof-pic'>
                    <img id='prof-pic' src="/p-pic.jpg" alt='Lupita Rivera Profile Pic '></img>
                </div>
              

            </div>

        </div>
    )
}

export default About
