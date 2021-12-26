import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Favourites from './Favourites';

const MyFavourite = () => {


    let deleteCount = 0;
    const { user } = useAuth();
    const [favourites, setFavourites] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/myFavourites/${email}`)
            .then((res) => res.json())
            .then((data) => setFavourites(data));
    }, [email, deleteCount]);
    // console.log(favourites);

    //Delete Part
    const [myFavourites, setMyFavourites] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/favourites`)
            .then(res => res.json())
            .then(data => {
                setMyFavourites(data);
            })
    }, []);

    //DELETE AN Products
    const handleDeleteFavourites = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myFavourites/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Removed successfully');
                        // console.log(data);
                        const remainingFavourites = favourites.filter(favourite => favourite._id !== id);
                        console.log(remainingFavourites);
                        // console.log(myFavourites);
                        setFavourites(remainingFavourites);
                    }
                })
        }
    }

    return (
        <div className="">
            <div className="col-md-6 mx-auto text-center pb-3">
                <img className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                <h5 className="text-warning">{user?.displayName}</h5>
                <h4>Your favourite item: <span className="text-danger">{favourites.length}</span></h4>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    favourites?.map(favourite => <Favourites

                        key={favourite._id}
                        favourite={favourite}
                        handleDeleteFavourites={handleDeleteFavourites}
                    >
                    </Favourites>)
                }

                {/* <div key={favourite._id} className="col ">
                            <div className="shadow p-3 text-center">
                                <div>
                                    <img className="img-fluid" style={{ height: "5rem" }} src={favourite?.image} alt="" />
                                    <h6 className="text-center">{favourite?.recipeName}</h6>
                                </div>
                                <div className="text-center">

                                    <button onClick={() => handleDeleteFavourites(favourite._id)} className="btn btn-danger">Remove from favourite</button>
                                </div>
                            </div>
                        </div> */}



            </div>
        </div>
    );
};

export default MyFavourite;