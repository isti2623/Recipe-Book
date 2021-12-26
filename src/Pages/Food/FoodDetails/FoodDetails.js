import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const FoodDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);
    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
                <div className="row container">
                    <div className="col-md-6">

                        <img className='w-100 mt-5' src={`data:image/png;base64,${user?.image}`} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='mt-5 fw-bold text-warning'>{user?.recipeName}</h1>
                        <hr />
                        <h5 className='mt-2'>{user?.method}</h5>


                    </div>
                </div>
            </div>
        </div>
    );
};
export default FoodDetails;