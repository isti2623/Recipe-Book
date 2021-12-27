import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const FoodDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://glacial-beach-07491.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);
    return (
        <div>
            {/* recipeName, cuisine, category, author, ingredients, method, */}
            <Navigation></Navigation>
            <div className='container'>
                <div className="row container">
                    <div className="col-md-6">

                        <img className='w-100 mt-5' src={`data:image/png;base64,${user?.image}`} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='mt-3 fw-bold text-warning'>{user?.recipeName}</h1>
                        <hr />
                        <h5 className='mt-3 text-danger fw-bold'>Category: <span className='text-dark'>{user?.category}</span></h5>
                        <h5 className='mt-3 text-danger fw-bold'>Cuisine: <span className='text-dark'>{user?.cuisine}</span></h5>

                        <h5 className='mt-3 text-danger fw-bold'>Author: <span className='text-dark'>{user?.author}</span></h5>
                        <h3 className='fw-bold text-danger mt-5'>Ingredients:</h3>
                        <h5 className='mt-2 '>{user?.ingredients}</h5>
                        <h3 className='fw-bold text-danger mt-5'>Method:</h3>
                        <h5 className='mt-2'>{user?.method}</h5>





                    </div>
                </div>
            </div>
        </div>
    );
};
export default FoodDetails;