import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='text-light fw-bold'><Link to="/" className='text-light fw-bold text-decoration-none'>Recipe Book</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home" className='text-light fw-bold text-decoration-none me-4'>HOME</Link>
                            {
                                user?.email ?
                                    <Button className='ms-5 mb-3' onClick={logOut} variant="danger">Logout</Button>
                                    :
                                    <Link to="/login" className='text-light fw-bold text-decoration-none'>LOGIN</Link>


                            }

                        </Nav>
                        {/*  <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;