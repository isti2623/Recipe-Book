import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import login from '../../../images/login.jpg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password didnot match');
            return;
        }
        registerUser(loginData.email, loginData.password, navigate, location);

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
                        <h2 className='mt-5 text-danger fw-bold fs-1 ms-5'>Register</h2>
                        <hr className='w-50 ms-5 mb-5' />
                        {!isLoading && <Form onSubmit={handleLoginSubmit} className='w-50 my-5 ms-5'>
                            <Form.Group className="mb-3">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    required
                                    name='name'
                                    type="text"
                                    placeholder="user name"
                                    onBlur={handleOnBlur}
                                />

                                <Form.Label className='mt-2'>Email Address</Form.Label>
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
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    required
                                    name='password2'
                                    type="password"
                                    placeholder="confirm password"
                                    onBlur={handleOnBlur}
                                />
                            </Form.Group>


                            <Button variant="danger" type="submit">
                                Register
                            </Button>
                            <NavLink className='text-decoration-none' to='/login'><p className='text-danger mt-3'>Already Register?Please Login</p></NavLink>
                        </Form>}
                        {
                            isLoading && <Spinner animation="grow" />
                        }
                        {
                            user?.email && <Alert>
                                successfully created the user
                            </Alert>
                        }
                        {
                            authError && <Alert>
                                {authError}
                            </Alert>
                        }
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

export default Register;