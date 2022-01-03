import React from 'react'
import { Card, Link } from 'react-bootstrap'

const ProjectCard = ({title, path, src, alt, label, description}) => {
    return (

        <div id="project-card">
        <Card style={{ width: '18rem' }}>
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
           
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
    </div>
















        // <div id="project-card">
        //     <Card style={{ width: '18rem' }}>
        //     <Card.Link href='https://github.com/LupitaLee/dallas_amigos_frontend' >

        //     <Card.Img variant="top" src="https://media.istockphoto.com/photos/dallas-at-dusk-picture-id522580445?b=1&k=20&m=522580445&s=170667a&w=0&h=OxztE0otc9tFoQ2UZNPB5-NzgCra8oGLp0qVjwE-7Bk=" href='https://github.com/LupitaLee/dallas_amigos_frontend' />

        //     </Card.Link>
        //     <Card.Body>
        //         <Card.Title>DALLAS AMIGOS </Card.Title>
        //         <Card.Text>
        //         React / Redux
        //         </Card.Text>
        //         {/* <Button variant="primary">Go somewhere</Button> */}
        //     </Card.Body>
        //     </Card>
        // </div>
    )
}

export default ProjectCard
