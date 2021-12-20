
import Navigation from '../Shared/Navigation/Navigation';
import React, { useState } from 'react';
import login from '../../images/login.jpg'
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});




    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {

        e.preventDefault();
    }


    const handleGoogleSignIn = () => {

    }


    return (
        <div>

            <Navigation></Navigation>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='mt-5 text-danger fw-bold fs-1 ms-5'>Login</h2>
                        <hr className='w-50 ms-5 mb-5' />
                        <Form onSubmit={handleLoginSubmit} className='w-50 my-5 ms-5'>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    name='email'
                                    type="email"
                                    placeholder="enter email"
                                    onBlur={handleOnBlur}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    onBlur={handleOnBlur}
                                />
                            </Form.Group>

                            <Button variant="danger" type="submit">
                                Login
                            </Button>
                            <NavLink className='text-decoration-none' to='/register'><p className='text-danger mt-3'>New User ? Please Register</p></NavLink>
                        </Form>

                        <p className='ms-5'>-------------------------------------------</p>

                        <Button className='ms-5 mb-3' onClick={handleGoogleSignIn} variant="danger">Google Sign In</Button>


                    </div>
                    <div className="col-lg-6">
                        <img src={login} className='w-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;