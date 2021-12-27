import React from 'react';
import { Link } from 'react-router-dom';
// import Navigation from '../../Shared/Navigation/Navigation';
// import MyFavourite from './MyFavourite';

const Favourites = ({ favourite, handleDeleteFavourites }) => {

    return (
        <div>
            {/* <Navigation /> */}
            <div className='container py-3'>
                <div className="col ">
                    <div className="shadow p-3 text-center">
                        <div>
                            <img className="img-fluid" style={{ height: "25rem" }} src={favourite?.image} alt="" />
                            <h4 className="text-center">{favourite?.recipeName}</h4>
                            <h6 className="text-center">{favourite?.category}</h6>
                        </div>
                        <div className="text-center">
                            <Link to={`/favourite/${favourite._id}`}> <button title='Add to favourite' className='btn btn-outline-danger '>Details</button></Link>

                            <button onClick={() => handleDeleteFavourites(favourite._id)} className="btn btn-danger ms-3">Remove from favourite</button>
                        </div>
                    </div>
                </div>
                {/* <MyFavourite /> */}
            </div>
        </div>
    );
};

export default Favourites;