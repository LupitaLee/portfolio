import React from 'react'
import "./About.css"


const About = () => {
    const bullet = <span style={{ color: '#1282a2',fontSize:"35px" }}>✿ </span>
    return (
        <div id='about'>
            <div className='title'>
                <h3><span style={{ color: '#1282a2' }}>&gt;</span> ABOUT ME</h3>
            </div>

  
            <div className='about-content'>
                <div id='about-text'>

                    <p>
                    As a Full Stack Web Developer, I thrive in a dynamic environment and am confident in my decision-making ability. A quick learner, creative thinker, and problem-solver, I’m experienced with:
                    </p>

                    <ul>
                        <li>{bullet}JavaScript (ES6+)</li>
                        <li>{bullet}React</li>
                        <li>{bullet}Redux</li>
                        <li>{bullet}Ruby on Rails</li>
                        <li>{bullet}Sinatra</li>
                        <li>{bullet}SQL</li> 
                        <li>{bullet}MySQL</li> 
                        <li>{bullet}Active Record</li> 
                        <li>{bullet}HTML / CSS / React
                        Bootstrap</li>
                        <li>{bullet}Git / Github</li>
                    </ul>

                    <p>
                    
                    When I’m not coding, I’m learning the Korean Language, and supporting the family business.
                    </p>


                    
                </div>

                {/* <div id='photo-div' className='prof-pic'>
                    <img id='prof-pic' src="/p-pic.jpg" alt='Lupita Rivera Profile Pic '></img>
                </div> */}

                
                <div className="col__2">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEDGWt1pHkDMA/profile-displayphoto-shrink_800_800/0/1642392504481?e=1648080000&v=beta&t=Uv9QieBNen8YST5cSgfE2DJ9NYJPlydGGKUAQdEYWmM" alt="lupita Rivera"  />
                </div>
            
            </div>

        </div>
    )
}

export default About
