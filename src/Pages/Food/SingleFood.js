import React from 'react';
import { Link } from 'react-router-dom';

const SingleFood = (props) => {
    const { recipeName, cuisine, category, author, ingredients, method, image, _id } = props.food;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={`data:image/png;base64,${image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{recipeName}</h5>
                        {/*  <p className="card-text">{method.slice(0, 100)}</p> */}
                        <p className="card-text">Category: {category}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/food/details/${_id}`}><div className="btn btn-danger mb-2">Details</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;