import React from 'react';
import { useContext } from 'react';
import { Image, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar bg="dark" expand="lg">
            <Container className='d-flex'>
                <div>
                    <Image src='../../public/grow.png'></Image>
                    <Navbar.Brand href="#home"><span className='text-primary fs-2 fw-bold'>Grow</span><span className=' fs-2 fw-bold text-success'>More</span>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white'>Courses</Nav.Link>
                            <Nav.Link className='text-white'>Blog</Nav.Link>
                            <Nav.Link className='text-white'>FAQ</Nav.Link>
                            <Nav.Link className='text-white'>Log In</Nav.Link>
                            <Nav.Link className='text-white'>Register</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;