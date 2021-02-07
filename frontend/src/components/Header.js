import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import { HomeOutlined, AddCircleOutline, ContactsOutlined, InfoOutlined, ListAltOutlined, PersonSharp, PersonAdd, AccountBoxOutlined } from '@material-ui/icons'
import { logout } from '../actions/userActions'
import { listCategorys } from '../actions/categoryActions'

const Header = () =>
{
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, error, categorys } = categoryList

    const logoutHandler = () =>
    {
        dispatch(logout())
    }

    useEffect(() =>
    {
        dispatch(listCategorys)
    }, [dispatch])

    return (
        <header className="fixed-top">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Gola</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <LinkContainer style={{ color: '#ffffff' }} to='/'>
                                <Nav.Link><HomeOutlined /> Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer style={{ color: '#ffffff' }} to='/contact'>
                                <Nav.Link ><ContactsOutlined /> Contact</Nav.Link>
                            </LinkContainer>
                            <LinkContainer style={{ color: '#ffffff' }} to='/aboutus'>
                                <Nav.Link><InfoOutlined /> About Us</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title={<ListAltOutlined style={{ color: '#ffffff' }} />} id="basic-nav-dropdown">
                                <NavDropdown.ItemText>Categories</NavDropdown.ItemText>
                                <NavDropdown.Divider />
                                {!loading && !error && (
                                    categorys.map((category) => (
                                        <NavDropdown.Item key={category._id} href="/caregory">{category.name}</NavDropdown.Item>
                                    ))
                                )}
                            </NavDropdown>

                        </Nav>
                        <Nav className="ml-auto">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" style={{ marginInline: 10, width: '60%' }} />
                                <Button variant="light">Search</Button>
                            </Form>
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title={<AddCircleOutline />}>
                                    <NavDropdown.ItemText>Admin Options</NavDropdown.ItemText>
                                    <NavDropdown.Divider />
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/categorylist'>
                                        <NavDropdown.Item>Categories</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/shoplist'>
                                        <NavDropdown.Item>Shops</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                            {userInfo ? (
                                <>
                                    <LinkContainer style={{ color: '#ffffff' }} to='/profile'>
                                        <Nav.Link><AccountBoxOutlined /> Profile</Nav.Link>
                                    </LinkContainer>
                                    <Nav.Link style={{ color: '#ffffff' }} onClick={logoutHandler}><PersonSharp /> Logout</Nav.Link>
                                </>
                            ) : (
                                    <>
                                        <LinkContainer style={{ color: '#ffffff' }} to='/register'>
                                            <Nav.Link><PersonAdd /> Register</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer style={{ color: '#ffffff' }} to='/login'>
                                            <Nav.Link><PersonSharp /> Login</Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
