import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleFood from '../SingleFood';

const Food = () => {
    const [foods, setFoods] = useState([]);

    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/recipePostReq")
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setSearchText(data);
            })
    }, [])
    const handleSearchField = e => {
        const searchTextVaule = e.target.value;
        const matchedFoods = foods.filter(food => food.recipeName.toLowerCase().includes(searchTextVaule.toLowerCase()))
        setSearchText(matchedFoods);
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className='container my-5'>
                <h2 className="text-warning text-center fw-bold fs-1">Search Your Favorite Food </h2>
                <hr className="w-25 mx-auto" />
                <InputGroup className="mb-3 mx-auto w-50 mt-4">
                    <FormControl
                        onChange={handleSearchField}
                        placeholder="search your favorite food"
                        aria-label="Recipient's username"
                        aria-describedby="search"
                    />
                </InputGroup>
                <div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            searchText.map(food => <SingleFood
                                key={food._id}
                                food={food}
                            >
                            </SingleFood>)
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Food;