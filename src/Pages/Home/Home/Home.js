import React from 'react';

import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Category />
        </div>
    );
};

export default Home;