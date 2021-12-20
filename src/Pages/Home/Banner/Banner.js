import React from 'react';
import './Banner.css'
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (

        <div>

            <img src={banner} alt="" className='opacity-100 w-100 rounded-3 p-5' />


        </div>

    );
};

export default Banner;