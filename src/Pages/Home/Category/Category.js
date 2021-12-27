import React, { useEffect, useState } from 'react';

import SingleFood from '../../Food/SingleFood';

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch("https://glacial-beach-07491.herokuapp.com/recipePostReq")
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setCategories(data);
            })
    }, [])

    const filterResult = (foodItem) => {
        const result = foods.filter(currentData => {
            return currentData.category === foodItem;
        });
        setCategories(result);
        console.log(result)
    }


    return (
        <div style={{ overflowX: "hidden" }}>
            <div className='row'>
                <div className='col-sm-6 col-md-2'>
                    <div className='text-center p-5 d-block'>
                        <button onClick={() => filterResult('dessert')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Dessert</button>
                        <button onClick={() => filterResult('diet')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Diet</button>
                        <button onClick={() => filterResult('vagan')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Vagan</button>
                        <button onClick={() => filterResult('cookies')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Cookies</button>
                        <button onClick={() => filterResult('fastfood')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Fast Food</button>
                        <button onClick={() => filterResult('drinks')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Drinks</button>
                        <button onClick={() => filterResult('Meat')} className='btn btn-outline-dark mx-2 w-100 mb-2'>Meat</button>
                        <button onClick={() => setCategories(foods)} className='btn btn-outline-dark mx-2 w-100 mb-2'>All</button>

                    </div>
                </div>


                <div className='col-sm-12 col-md-10'>
                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                categories.map(food => <SingleFood
                                    key={food._id}
                                    food={food}
                                >
                                </SingleFood>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;