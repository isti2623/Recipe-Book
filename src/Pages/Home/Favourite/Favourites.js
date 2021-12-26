import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import MyFavourite from './MyFavourite';

const Favourites = () => {
    return (
        <div>
            <Navigation />
            <div className='container p-3'>
                <MyFavourite />
            </div>
        </div>
    );
};

export default Favourites;