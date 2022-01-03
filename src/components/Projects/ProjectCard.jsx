import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectCard = ({title, path, src, alt, label, description}) => {
    return (

        <div id="project-card">
        <Card style={{ width: '22rem' }}>
        <Card.Link href={path} >

        <Card.Img variant="top" src={src} alt={alt} />

        </Card.Link>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>

            <Card.Text>
            {label}
            </Card.Text>
           
           
        </Card.Body>
        </Card>
    </div>

    )
}

export default ProjectCard
