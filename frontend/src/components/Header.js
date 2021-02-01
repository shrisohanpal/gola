import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import { HomeOutlined, AddCircleOutline, ContactsOutlined, InfoOutlined, ListAltOutlined, PersonSharp, PersonAdd } from '@material-ui/icons'


const Header = () =>
{
    return (
        <header className="fixed-top">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Gola</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/" style={{ color: '#ffffff' }}><HomeOutlined /> Home</Nav.Link>
                            <Nav.Link href="/contact" style={{ color: '#ffffff' }}><ContactsOutlined /> Contact</Nav.Link>
                            <Nav.Link href="/aboutus" style={{ color: '#ffffff' }}><InfoOutlined /> About Us</Nav.Link>
                            <NavDropdown title={<ListAltOutlined style={{ color: '#ffffff' }} />} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Caterogy 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another category</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Third</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Nav className="ml-auto">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" style={{ marginInline: 10, width: '60%' }} />
                                <Button variant="light">Search</Button>
                            </Form>
                            <Nav.Link href="/createshop" style={{ color: '#ffffff' }} ><AddCircleOutline /> Add</Nav.Link>
                            <Nav.Link href="/login" style={{ color: '#ffffff' }}><PersonSharp /> Login</Nav.Link>
                            <Nav.Link href="/register" style={{ color: '#ffffff' }}><PersonAdd /> Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
