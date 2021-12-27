import React from 'react';
import './NotFound.css'
import not from '../../images/not.png'
import Navigation from '../Shared/Navigation/Navigation';
const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <img className='not-found' src={not} alt="" />

        </div>
    );
};

export default NotFound;