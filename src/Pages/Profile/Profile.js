import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import SinPost from './SinPost';

const Profile = () => {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);
    const [del, setDel] = useState(0);
    useEffect(() => {
        const url = `http://localhost:5000/recipePostReq?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [del])
    return (
        <div>
            <Navigation></Navigation>
            {
                posts.map(post => <SinPost
                    key={post._id}
                    post={post}
                    del={del}
                    setDel={setDel}
                >
                </SinPost>)
            }

        </div>
    );
};
export default Profile;