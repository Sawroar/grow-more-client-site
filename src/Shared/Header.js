import React from 'react';
import { useContext } from 'react';
import { Image, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar bg="dark" expand="lg" className='mb-3 '>
            <Container className='d-flex justify-content-between align-items-cente'>
                <div>

                    <Navbar.Brand > <Link to='/' className='link'><span className='text-primary fs-2 fw-bold '>Grow</span><span className=' fs-2 fw-bold text-success  '>More</span></Link>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white'> <Link to='/courses' className='text-white  link'>Courses</Link></Nav.Link>
                            <Nav.Link className='text-white'>Blog</Nav.Link>
                            <Nav.Link className='text-white'>FAQ</Nav.Link>
                            <Nav.Link className='text-white'>{user?.uid ?
                                <Nav.Link >
                                    <span>{user?.displayName}</span>
                                    <Nav.Link onClick={handleLogOut} className='text-white  link'>LogOut
                                    </Nav.Link>
                                </Nav.Link>
                                :
                                <Nav.Link >
                                    <Nav.Link ><Link to='/login' className='text-white  link'>Log In</Link></Nav.Link>
                                    <Nav.Link className='text-white'><Link to='/register' className='text-white  link'> Register</Link></Nav.Link>
                                </Nav.Link>
                            }
                            </Nav.Link>
                            <Nav.Link>
                                {user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image> : <FaUser></FaUser>}
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar >
    );
};

export default Header;