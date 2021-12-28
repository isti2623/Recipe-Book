import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SinPost = (props) => {
    const { user } = useAuth();
    const { recipeName, cuisine, category, author, ingredients, method, image, _id } = props.post;
    const { del, setDel } = props;
    /* const [postDel, setPostDel] = useState(); */
    const handleDeleteBlood = id => {
        const url = `https://glacial-beach-07491.herokuapp.com/recipePostReq/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDel(del + 1);
                    alert('deleted successfully');
                }
            })
    }
    return (
        <div className='doner my-5'>
            <div className="container  card my-3">
                <div className='d-flex'>
                    <div className="col-lg-2">

                    </div>

                    <div className="col-md-6">
                        <h2 className='mt-3'><span className='text-danger '>RecipeName:</span> {recipeName}</h2>
                        <h4 className='mt-3'><span className='text-danger'>Category:</span> {category}</h4>
                        <h4 className='mt-3'><span className='text-danger'>Author:</span> {author}</h4>
                        <h4 className='mt-3'><span className='text-danger'>Email:</span> {user?.email}</h4>

                        <div className="btn btn-danger mb-2 ms-3" onClick={() => handleDeleteBlood(_id)} >DELETE</div>
                        <Link to={`/users/update/${_id}`}><div className="btn btn-danger ms-3 mb-2">EDIT</div></Link>

                    </div>
                    <div className="col-md-4 mb-5 date-card">
                        <img className='w-25 mt-5' src={`data:image/png;base64,${image}`} alt="" />


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinPost;