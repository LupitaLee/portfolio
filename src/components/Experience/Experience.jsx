import React from 'react'
import "./Experience.css"
import { Nav, Col, Tab, Row,} from 'react-bootstrap'

import FlatironSchool from '../FlatironSchool'
import Nisi from '../Nisi'
import TexasProSigns from '../TexasProSigns'
import CricketWireless from '../CricketWireless'
import Motherboard from '../Motherboard'



const Experience = () => {
    return (
        <div >

        
        <div id="experience">
            <div className='title'>
                <h3><span style={{ color: '#1282a2' }}>&gt;</span> EXPERIENCE</h3>
            </div>

          

            <div className="experience-resume">
                <h3 >Résumé</h3>

                <a className="btn btn-dark btn-xl" href="https://docs.google.com/document/d/1PwyhmqWtJoo9GvrLx0JhWJJU8sUZ7KHRFhLRGhdP7O0/edit?usp=sharing">Download PDF Version</a>
            </div>
           
           

            <div className='experience-Tab'>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item  >
                        <Nav.Link eventKey="first">Software Engineer Student</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="second">Customer Service Rep.</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="third">Office Assistant</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="fourth">Sales Rep.</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="fifth">Motherboard Tester / QC (Quality Control)</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                    <Col sm={7}>
                    <Tab.Content >
                        <Tab.Pane  eventKey="first">

                            <FlatironSchool  />

                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <Nisi />
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <TexasProSigns />
                        </Tab.Pane>

                        <Tab.Pane eventKey="fourth">
                            <CricketWireless />
                        </Tab.Pane>

                        <Tab.Pane eventKey="fifth">
                            <Motherboard />
                        </Tab.Pane>

                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>

            


         
        </div>

        

        </div>
    )
}

export default Experience
