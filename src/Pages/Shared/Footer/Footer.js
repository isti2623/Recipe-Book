
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-secondary p-3 mt-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4">

                        <p className='text-white mt-3 '>Recipi Books Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quia commodi nemo labore pariatur voluptate!</p>

                    </div>
                    <div className="col-lg-4 ms-5">
                        <h2 className='text-white fs-3 fw-bold ms-5'>Useful Links
                        </h2>
                        <div className='text-light p-2 mt-4 ms-5'>
                            <Link className='text-decoration-none text-white ms-5' to='/favorite'> <p>Favorite</p></Link>
                            <Link className='text-decoration-none text-white ms-5' to='/'> <p>Home</p></Link>
                            <Link className='text-decoration-none text-white ms-5' to='/food'> <p>Food</p></Link>


                        </div>
                    </div>

                    <div className="col-lg-3 ms-5">
                        <h2 className='text-white fs-3 fw-bold ms-5'>Contact
                        </h2>
                        <div className='text-light p-2 mt-4 ms-5'>
                            <p>Explore new worlds with us</p>


                            <span>Dhaka,Bangladesh</span>





                        </div>
                    </div>
                </div>
                <h6 className='text-white text-center mt-5'>© 2021 Recipi Books. All rights reserved</h6>
            </div>
        </div>
    );
};

export default Footer;