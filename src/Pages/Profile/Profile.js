import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import SinPost from './SinPost';

const Profile = () => {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);
    const [del, setDel] = useState(0);
    useEffect(() => {
        const url = `https://glacial-beach-07491.herokuapp.com/recipePostReq?email=${user.email}`
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
            <Footer></Footer>
        </div>
    );
};
export default Profile;