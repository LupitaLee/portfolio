import React from 'react'
import "./Projects.css"

// import Slider from '../Slider/Slider'

import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
    return (
        <div id='project'>
            <div className='title'>
                <h3><span style={{ color: '#1282a2' }}>&gt;</span> PROJECTS</h3>
            </div>
            
            <div className='projects-container'>
                <div className="project-container">
                <ProjectCard title='DALLAS AMIGOS' path='https://github.com/LupitaLee/dallas_amigos_frontend' src='https://media.istockphoto.com/photos/dallas-at-dusk-picture-id522580445?b=1&k=20&m=522580445&s=170667a&w=0&h=OxztE0otc9tFoQ2UZNPB5-NzgCra8oGLp0qVjwE-7Bk=' alt='City of Dallas' description='A single web application for the spanish community in the Dallas -FTW area in Texas.' label='React / Redux'/>
                </div>

                <div className="project-container">
                <ProjectCard title='Food Court Online' path='https://github.com/LupitaLee/FoodCourtOnline' src='https://images.unsplash.com/photo-1593768128575-e41545e803d8?ixlib=rb-1.2.1&ixid=%3D%3D&auto=format&=&w=500&q=60' alt='front side of a restaurant with tables and people eating' description='Order Online Food Mall Courts' label='Vanilla Javascript'/>
                </div>

                <div className="project-container">
                <ProjectCard title='Photos Website' path='https://github.com/LupitaLee/photos_website' src='https://images.unsplash.com/photo-1555663173-830f65a7329a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' description='Portfolio Creator using CRUD functionalities and User Auth' label='Ruby on Rails '/>
                </div>

                <div className="project-container">
                <ProjectCard title='MY PHOTOS' path='https://github.com/LupitaLee/myphotos' src='https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='lake a harm holding a camera' description='Portfolio Creator to add your personal photos using CRUD functionalities' label='Sinatra '/>
                </div>

                <div className="project-container">
                <ProjectCard title='QUOTES' path='https://github.com/LupitaLee/quotes' src='https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='table with a coffe mug with a quote note' description='Through the Comand Line display Quotes' label='CLI '/>
                </div>

                </div>

            
        </div>
    )
}

export default Projects
