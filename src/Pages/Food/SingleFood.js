import React from 'react';

const SingleFood = (props) => {
    const { recipeName, cuisine, category, author, ingredients, method } = props.food;
    return (
        <div className='doner my-5'>
            <div className="container  card my-3 ms-5">
                <div className='d-flex'>
                    <div className="col-lg-2">


                    </div>

                    <div className="col-md-6">
                        <h2 className='mt-3'><span className='text-danger fw-bold'>Name:</span> {recipeName}</h2>
                        <h4 className='mt-3'><span className='text-danger fw-bold'>Age:</span> {cuisine}</h4>
                        <h6 className='mt-3'><span className='text-danger fw-bold'>Details:</span> {category}</h6>

                    </div>
                    <div className="col-md-4 mb-5 date-card">

                        <h6 className=' fw-bold'><span className='text-danger fw-bold'>Blood Group:</span> {author}</h6>
                        <h6 className='mt-2 fw-bold'><span className='text-danger fw-bold'>Number Of Blood:</span> {ingredients}</h6>
                        <h6 className='mt-2'><span className='text-danger fw-bold'>Contact:</span> {method}</h6>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;