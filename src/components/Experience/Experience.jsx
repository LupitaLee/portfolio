import React from 'react'
import "./Experience.css"
import { Nav, Col, Tab, Row,} from 'react-bootstrap'

import FlatironSchool from '../FlatironSchool'
import Nisi from '../Nisi'
import TexasProSigns from '../TexasProSigns'



const Experience = () => {
    return (
        <div id="experience">
            <div className='title'>
                <h3><span style={{ color: '#353535' }}>&gt;</span> EXPERIENCE</h3>
            </div>
          

            <div className='experience-Tab'>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Software Engineer Student</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="second">Customer Service Rep.</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="third">Office Assistant</Nav.Link>
                        </Nav.Item>

                        {/* <Nav.Item>
                        <Nav.Link eventKey="fourth">Customer Service Rep.</Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                        <Nav.Link eventKey="fourth">Sales Rep.</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="fifth">Motherboard Tester / QC (Quality Control)</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">

                            <FlatironSchool />

                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <Nisi />
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <TexasProSigns />
                        </Tab.Pane>

                        

                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>

         
        </div>
    )
}

export default Experience
