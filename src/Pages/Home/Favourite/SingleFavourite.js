import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import MyFavourite from './MyFavourite';

const SingleFavourite = () => {
    return (
        <div>
            <Navigation />
            <div className='container'>
                <MyFavourite />
            </div>
        </div>
    );
};

export default SingleFavourite;