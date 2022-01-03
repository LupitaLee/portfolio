import React from 'react'
import "./Project.css"

// import Slider from '../Slider/Slider'

import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div id='project'>
            <div className='title'>
                <h3><span style={{ color: '#353535' }}>&gt;</span> PROJECTS</h3>
            </div>
                {/* <Slider/> */}

                <ProjectCard/>
            
        </div>
    )
}

export default Project
