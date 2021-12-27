import React from 'react';
import { Link } from 'react-router-dom';
import {
    FacebookShareButton,
    FacebookIcon,

} from "react-share";

const SingleFood = (props) => {
    const { recipeName, cuisine, category, author, ingredients, method, image, _id } = props?.food;
    const shareUrl = `https://recipe-book-51ad3.web.app/food/details/${_id}`;

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img style={{ height: "25rem" }} src={`data:image/png;base64,${image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{recipeName}</h5>
                        {/*  <p className="card-text">{method.slice(0, 100)}</p> */}
                        <div className='d-flex justify-content-between'>
                            <FacebookShareButton url={shareUrl} quote={recipeName} hashtag={category}>
                                <FacebookIcon size={40} />
                            </FacebookShareButton>
                            <Link to={`/food/favourite/${_id}`}> <button title='Add to favourite' className='btn btn-outline-danger '><i className="far fa-heart fs-3 p-1"></i></button></Link>
                        </div>
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