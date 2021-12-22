import React from 'react';

const SingleFood = (props) => {
    const { recipeName, cuisine, category, author, ingredients, method, image } = props.food;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={`data:image/png;base64,${image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{recipeName}</h5>
                        <p className="card-text">{method}</p>
                        <p className="card-text">Category: {category}</p>
                    </div>
                    <div className="card-footer">
                        <div className="btn btn-danger fw-bold">Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;