import React from 'react';
import { Link } from 'react-router-dom';

const SinPost = (props) => {
    const { recipeName, cuisine, category, author, ingredients, method, image, _id } = props.post;
    const { del, setDel } = props;
    /* const [postDel, setPostDel] = useState(); */
    const handleDeleteBlood = id => {
        const url = `http://localhost:5000/recipePostReq/${id}`
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
                        <h2 className='mt-3'><span className='text-danger fw-bold'>Name:</span> {recipeName}</h2>
                        <h4 className='mt-3'><span className='text-danger fw-bold'>Age:</span> {cuisine}</h4>
                        <h6 className='mt-3'><span className='text-danger fw-bold'>Details:</span> {category}</h6>
                        <div className="btn btn-danger mb-2" onClick={() => handleDeleteBlood(_id)} >DELETE</div>
                        <Link to={`/users/update/${_id}`}><div className="btn btn-danger mb-2">EDIT</div></Link>

                    </div>
                    <div className="col-md-4 mb-5 date-card">
                        <p className='date'>{author}</p>
                        <h6 className=' fw-bold'><span className='text-danger fw-bold'>Blood Group:</span> {ingredients}</h6>
                        <h6 className='mt-2 fw-bold'><span className='text-danger fw-bold'>Number Of Blood:</span> {method}</h6>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinPost;