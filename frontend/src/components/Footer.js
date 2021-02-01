import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Footer = () =>
{
    return (
        <footer style={{ marginTop: 30 }}>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Row style={{ width: '100%' }}>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Navbar.Brand>Contact Details</Navbar.Brand>
                            <ul>
                                <li style={{ color: 'white' }}>
                                    Address,
                                </li>
                                <li style={{ color: 'white' }}>
                                    Address,
                                </li>
                                <li style={{ color: 'white' }}>
                                    Address,
                                </li>
                                <li style={{ color: 'white' }}>
                                    Address,
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Navbar.Brand>Privacy Policy</Navbar.Brand>
                            <ul>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="/">Privacy Policy</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="/">Privacy Policy</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="/">Privacy Policy</Nav.Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Navbar.Brand>Social Media Links</Navbar.Brand>
                            <ul>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="/">Facebook</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="/">Instagram</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="/">Whatsapp</Nav.Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            <Navbar bg="dark" variant="dark">
                <Col style={{ color: 'white' }} className='text-center py-3'>
                    Copyright &copy; Gola
                    <Nav.Link style={{ color: 'white' }} href="https://slanzapanika.com">Designed & Developed By: Darshan Kumar Singh (Slanz Apanika) </Nav.Link>
                </Col>
            </Navbar>
        </footer>
    )
}

export default Footer
