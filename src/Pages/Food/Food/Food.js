import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleFood from '../SingleFood';

const Food = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/recipePostReq")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>

            {
                foods.map(food => <SingleFood
                    key={food._id}
                    food={food}
                >
                </SingleFood>)
            }

        </div>
    );
};

export default Food;