import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const UpdatePost = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
    return (
        <div>
            <Navigation></Navigation>
            <h2>Update Post</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdatePost;