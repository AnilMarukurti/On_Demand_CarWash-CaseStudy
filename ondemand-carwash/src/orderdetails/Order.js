import React from 'react'
import {Col, Container, Navbar, Row } from 'react-bootstrap'
import { CgProfile} from 'react-icons/cg';
import { FcAbout} from 'react-icons/fc';
import { MdLocalCarWash} from 'react-icons/md';
import { FaHistory} from 'react-icons/fa';
import { FcCustomerSupport} from 'react-icons/fc';
import { GiCancel} from 'react-icons/gi';
import './Order.css';
function Order() {
    return (
        <div className='bg-container'>
            <Container  >
                <Row>
                    <Col xs={12}>
                        <Navbar>
                            <Navbar.Brand href="#home">Car Wash</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                Signed in as: <a href="#login">Marukurti Anil</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                

                    <Col xs={6} md={4}>
                        <div className='profile' >
                            <CgProfile className='icon'/>
                            <h4 className='heading'>Profile</h4>
                        </div>
                    </Col>
                    
                    <Col xs={6} md={4}>
                        <div className='profile '>
                            <MdLocalCarWash className='icon' />
                            <h4 className='heading'>Book a Wash</h4>
                        </div>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className='profile'>
                            <GiCancel className='icon'/>
                            <h4 className='heading'>Cancel Request</h4>
                        </div>
                    </Col>
                
                    <Col xs={6} md={4}>
                        <div className='profile'>
                            <FaHistory className='icon'/>
                            <h4 className='heading'>Car Wash History</h4>
                        </div>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className='profile '>
                            <FcAbout className='icon'/>
                            <h4 className='heading'>About</h4>
                        </div>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className='profile'>
                            <FcCustomerSupport className='icon'/>
                            <h4 className='heading'>Help and Support</h4>
                        </div>
                    </Col>
                </Row>

            
            </Container>
        </div>    
    )
}

export default Order
