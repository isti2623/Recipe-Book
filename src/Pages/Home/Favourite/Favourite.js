import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import MyFavourite from './MyFavourite';

const Favourite = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://glacial-beach-07491.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [id]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data);

        axios.post(`https://glacial-beach-07491.herokuapp.com/favourites`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Fovourited Successfully');
                    reset();
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            <Navigation />
            <div className='container'>
                <div className="row container text-center shadow">
                    <div className="col-md-4">

                        <img className='w-25 mt-5' src={`data:image/png;base64,${users?.image}`} alt="" />
                    </div>
                    <div className="col-md-4">
                        <h4 className='mt-5 fw-bold text-warning'>{users?.recipeName}</h4>

                    </div>
                    <div className="col-md-4 p-4">

                        {
                            users?.recipeName && <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={users?.recipeName} readOnly hidden {...register("recipeName")} />
                                <input defaultValue={users?.category} readOnly hidden {...register("category")} />
                                <input defaultValue={users?.cuisine} readOnly hidden {...register("cuisine")} />
                                <input defaultValue={users?.author} readOnly hidden {...register("author")} />
                                <input defaultValue={users?.ingredients} readOnly hidden {...register("ingredients")} />
                                <input defaultValue={users?.method} readOnly hidden {...register("method")} />

                                <input defaultValue={user?.displayName} readOnly hidden {...register("userName")} />
                                <input defaultValue={user?.email} readOnly hidden {...register("email")} />
                                {errors.email && <span className="text-warning">This field is required.</span>}
                                <input defaultValue={`data:image/png;base64,${users?.image}`} hidden readOnly {...register("image")} />
                                {errors.image && <span className="text-warning">This field is required.</span>}
                                <button type="submit" className='btn btn-outline-danger'>Add to favourite</button>

                            </form>
                        }

                    </div>
                </div>
                <div>
                    <MyFavourite />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Favourite;